import { Faq } from "./_components/faq";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Pricing } from "./_components/pricing";
import { Testimonials } from "./_components/testimonials";

export default function LandingV2() {
  return (
    <div className="min-h-screen overflow-hidden bg-background [filter:invert(1)_hue-rotate(180deg)]">
      <Hero />
      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16">
        <div className="w-full overflow-hidden rounded-2xl border bg-background shadow-2xl [filter:invert(1)_hue-rotate(180deg)]">
          <Features />
          <Faq />
          <Testimonials />
          <Pricing />
          <Footer />
        </div>
      </main>
    </div>
  );
}
