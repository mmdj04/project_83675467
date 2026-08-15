import { readFileSync } from "node:fs";

const en = JSON.parse(readFileSync("messages/en.json", "utf8"));
const pt = JSON.parse(readFileSync("messages/pt-BR.json", "utf8"));

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
const enKeys = new Set(enFlat.map(([key]) => key));
const ptKeys = new Set(ptFlat.map(([key]) => key));

const missing = [...enKeys].filter((key) => !ptKeys.has(key));
const extra = [...ptKeys].filter((key) => !enKeys.has(key));

if (missing.length > 0) {
  console.error(
    `FALTANDO TRADUÇÃO em messages/pt-BR.json (${missing.length}):\n` +
      missing.map((k) => `  - ${k} (en: "${enFlat.find(([key]) => key === k)?.[1]}")`).join("\n"),
  );
  process.exit(1);
}
if (extra.length > 0) {
  console.warn(`Chaves extras em pt-BR.json sem correspondência em en.json (${extra.length}): ${extra.join(", ")}`);
}
console.log(`Paridade OK: ${enKeys.size} chaves em en.json, todas traduzidas em pt-BR.json.`);