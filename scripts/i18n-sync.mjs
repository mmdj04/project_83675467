import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const en = JSON.parse(readFileSync("messages/en.json", "utf8"));
const pt = JSON.parse(readFileSync("messages/pt-BR.json", "utf8"));

const errors = [];
const warnings = [];

function flatten(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return value !== null && typeof value === "object"
      ? flatten(value, fullKey)
      : [[fullKey, value]];
  });
}

const enFlat = flatten(en);
const ptFlat = flatten(pt);
const enFlatMap = new Map(enFlat);
const ptFlatMap = new Map(ptFlat);
const enKeys = new Set(enFlatMap.keys());
const ptKeys = new Set(ptFlatMap.keys());
const namespaces = new Set(Object.keys(en));

function isValidNamespacePath(path) {
  let current = en;
  for (const part of path.split(".")) {
    if (!current || typeof current !== "object" || !(part in current)) return false;
    current = current[part];
  }
  return typeof current === "object" && current !== null;
}

// ── 1. Paridade en ↔ pt ──────────────────────────────────────────────────────

const missing = [...enKeys].filter((key) => !ptKeys.has(key));
const extra = [...ptKeys].filter((key) => !enKeys.has(key));

if (missing.length > 0) {
  errors.push(
    `FALTANDO TRADUÇÃO em messages/pt-BR.json (${missing.length}):\n` +
      missing.map((k) => `  - ${k} (en: "${enFlatMap.get(k)}")`).join("\n"),
  );
}
if (extra.length > 0) {
  warnings.push(`Chaves extras em pt-BR.json sem correspondência em en.json (${extra.length}): ${extra.join(", ")}`);
}

// ── 2. Uso no código: namespaces, chaves literais e placeholders ICU ────────

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
  });
}

const sourceFiles = walk(resolve("src")).filter(
  (file) => !file.includes("/components/ui/") && !file.includes("/legacy/"),
);
const sourceByFile = new Map(sourceFiles.map((file) => [file, readFileSync(file, "utf8")]));
const sourceCache = new Map();
function readSource(file) {
  if (!sourceCache.has(file)) sourceCache.set(file, readFileSync(file, "utf8"));
  return sourceCache.get(file);
}

function declaredNamespaces(file) {
  return [...readSource(file).matchAll(namespaceRegex)].map((match) => match[1]);
}

function importerNamespace(file) {
  const fileNoExt = file.replace(/\.[jt]sx?$/, "");
  for (const other of sourceFiles) {
    const declared = declaredNamespaces(other);
    if (declared.length === 0) continue;
    const relativeImports = [...readSource(other).matchAll(/from\s+["']([^"']+)["']/g)]
      .map((match) => match[1])
      .filter((target) => target.startsWith("."));
    for (const target of relativeImports) {
      const resolvedTarget = resolve(dirname(other), target).replace(/\.[jt]sx?$/, "");
      if (resolvedTarget === fileNoExt) return declared[0];
    }
  }
  return undefined;
}

function resolveNamespace(file, key) {
  const declared = declaredNamespaces(file);
  if (declared.length > 0) return declared[0];

  const importedFrom = importerNamespace(file);
  if (importedFrom && enFlatMap.has(`${importedFrom}.${key}`)) return importedFrom;

  const candidates = [...enKeys].filter((candidate) => candidate.endsWith(`.${key}`));
  if (candidates.length === 1) return candidates[0].split(".")[0];

  return undefined;
}

const literalKeyRegex = /\bt\(\s*["']([^"']+)["']\s*\)/g;
const namespaceRegex = /(?:useTranslations|getTranslations)\(\s*["']([^"']+)["']\s*\)/g;
const callWithValuesRegex = /\bt\(\s*["']([^"']+)["']\s*,\s*\{([^}]*)\}/g;
const paramRegex = /([A-Za-z_][A-Za-z0-9_]*)\s*:/g;

const usedKeys = new Set();

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  const declared = [...source.matchAll(namespaceRegex)].map((match) => match[1]);

  for (const ns of declared) {
    if (!isValidNamespacePath(ns)) {
      errors.push(`${file}: namespace "${ns}" não existe em messages/en.json`);
    }
  }

  for (const match of source.matchAll(literalKeyRegex)) {
    const key = match[1];
    const ns = resolveNamespace(file, key);
    const resolved = key.includes(".") && namespaces.has(key.split(".")[0]) ? key : ns ? `${ns}.${key}` : key;

    if (!enFlatMap.has(resolved)) {
      errors.push(`${file}: chave "${key}" (resolvida "${resolved}") não existe em messages/en.json`);
      continue;
    }
    if (!ptFlatMap.has(resolved)) {
      errors.push(`${file}: chave "${key}" (resolvida "${resolved}") não existe em messages/pt-BR.json`);
      continue;
    }
    usedKeys.add(resolved);

    const valueCalls = [...source.matchAll(callWithValuesRegex)].filter((c) => c[1] === key);
    for (const call of valueCalls) {
      const params = [...call[2].matchAll(paramRegex)].map((p) => p[1]);
      for (const param of params) {
        for (const [label, map] of [
          ["en", enFlatMap],
          ["pt-BR", ptFlatMap],
        ]) {
          if (!map.get(resolved)?.includes(`{${param}`)) {
            errors.push(
              `${file}: t("${key}", { ${param}: ... }) mas a mensagem em ${label} não contém o placeholder {${param}}`,
            );
          }
        }
      }
    }
  }
}

const codeBlob = sourceFiles.map((file) => readSource(file)).join("\n");
const orphanKeys = [...enKeys].filter((key) => {
  const short = key.slice(key.lastIndexOf(".") + 1);
  const quoted = (k) => codeBlob.includes(`"${k}"`) || codeBlob.includes(`'${k}'`);
  return !usedKeys.has(key) && !quoted(key) && !quoted(short);
});
if (orphanKeys.length > 0) {
  warnings.push(
    `Chaves em en.json sem referência literal no código (${orphanKeys.length}): ${orphanKeys.join(", ")}`,
  );
}

// ── Saída ────────────────────────────────────────────────────────────────────

for (const warning of warnings) console.warn(`⚠ ${warning}`);
for (const error of errors) console.error(`✖ ${error}`);

if (errors.length > 0) {
  console.error(`\n${errors.length} erro(s) de i18n. Corrija antes de continuar.`);
  process.exit(1);
}
console.log(
  `Paridade OK: ${enKeys.size} chaves em en.json, todas traduzidas em pt-BR.json` +
    ` | ${sourceFiles.length} arquivos analisados | ${usedKeys.size} chaves usadas no código.`,
);