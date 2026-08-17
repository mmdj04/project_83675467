import { Faq } from "./_components/faq";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Pricing } from "./_components/pricing";
import { Testimonials } from "./_components/testimonials";

export default function LandingV2() {
  return (
    <div className="bg-background flex min-h-screen flex-col text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Faq />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
