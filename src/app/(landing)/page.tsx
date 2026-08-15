import { readFileSync } from "fs";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Changelog } from "./_components/changelog";

export default function Home() {
  const changelogContent = readFileSync(
    process.cwd() + "/changelog.md",
    "utf8"
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Changelog content={changelogContent} />
      </main>
    </div>
  );
}