import { Hero } from "./_components/hero";
import { ModulesSection } from "./_components/modules-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ModulesSection />
      </main>
    </div>
  );
}
