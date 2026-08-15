import { readFileSync } from "node:fs";

const en = JSON.parse(readFileSync("messages/en.json", "utf8"));
const pt = JSON.parse(readFileSync("messages/pt-BR.json", "utf8"));

const missing = Object.keys(en).filter((key) => !(key in pt));
const extra = Object.keys(pt).filter((key) => !(key in en));

if (missing.length > 0) {
  console.error(
    `FALTANDO TRADUÇÃO em messages/pt-BR.json (${missing.length}):\n` +
      missing.map((k) => `  - ${k} (en: "${en[k]}")`).join("\n"),
  );
  process.exit(1);
}
if (extra.length > 0) {
  console.warn(`Chaves extras em pt-BR.json sem correspondência em en.json (${extra.length}): ${extra.join(", ")}`);
}
console.log(`Paridade OK: ${Object.keys(en).length} chaves em en.json, todas traduzidas em pt-BR.json.`);
