import { readFileSync, writeFileSync } from "node:fs";

const pt = JSON.parse(readFileSync("messages/pt-BR.json", "utf8"));

if (process.argv.includes("--check")) {
  const en = JSON.parse(readFileSync("messages/en.json", "utf8"));
  const ok = Object.keys(pt).every((k) => en[k] === k);
  const extra = Object.keys(en).filter((k) => !(k in pt));
  if (!ok || extra.length) {
    console.error("messages/en.json fora de sincronia. Rode: node scripts/i18n-sync.mjs");
    process.exit(1);
  }
  console.log(`en.json em dia (${Object.keys(pt).length} chaves).`);
  process.exit(0);
}

const en = {};
for (const key of Object.keys(pt)) {
  en[key] = key;
}
writeFileSync("messages/en.json", JSON.stringify(en, null, 2) + "\n");
console.log(`en.json sincronizado: ${Object.keys(en).length} chaves (chave = texto em inglês).`);