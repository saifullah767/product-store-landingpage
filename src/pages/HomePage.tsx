import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Benefits } from "../components/Benefits";
import { Pricing } from "../components/Pricing";
import { ComingSoon } from "../components/ComingSoon";
import { FinalCTA } from "../components/FinalCTA";
// import { Testimonials } from "../components/Testimonials";
import { ProductFeatures } from "../components/ProductFeatures";

export function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <ProductFeatures />
      <Features />
      <HowItWorks />
      <Benefits />
      {/* <Testimonials /> */}
      <Pricing />
      <ComingSoon />
      <FinalCTA />
    </div>
  );
}
