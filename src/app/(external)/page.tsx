import { AccessibilityTroubleshooting } from "./_components/accessibility-troubleshooting";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Installation } from "./_components/installation";
import { Nav } from "./_components/nav";
import { Stats } from "./_components/stats";
import { TechStack } from "./_components/tech-stack";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Installation />
        <TechStack />
        <AccessibilityTroubleshooting />
      </main>
      <Footer />
    </div>
  );
}
