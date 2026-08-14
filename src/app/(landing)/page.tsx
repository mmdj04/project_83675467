import { Hero } from "./_components/hero";
import { Features } from "./_components/features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
