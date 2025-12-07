import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Benefits } from "../components/Benefits";
import { Pricing } from "../components/Pricing";
import { ComingSoon } from "../components/ComingSoon";
import { FinalCTA } from "../components/FinalCTA";
// import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      {/* <Benefits /> */}
      {/* <Testimonials /> */}
      <Pricing />
      <ComingSoon />
      {/* <FinalCTA /> */}
    </div>
  );
}
