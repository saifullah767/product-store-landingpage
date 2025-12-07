import { Pricing } from "../components/Pricing";
import { FinalCTA } from "../components/FinalCTA";

export function PricingPage() {
  return (
    <div className="space-y-16">
      {/* <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Choose the plan that grows with you
          </h1>
          <p className="text-lg text-gray-600">
            Lifetime access with transparent pricing. Upgrade whenever you are ready to unlock
            advanced automation, analytics, and priority support.
          </p>
        </div>
      </section> */}
      <Pricing />
      <div className="container flex mx-auto max-w-7xl px-4 space-y-12">
        <div className="px-4 text-lg space-y-6">
          <p className="text-gray-400 font-bold">
            Explore Product-Store with confidence — 7 days, zero pressure.
          </p>
          <p className="text-gray-600 font-bold">
            I built Product-Store to help store owners, small businesses, and creators launch their online shop without the headaches of 
            complicated setups or expensive software. Everything you need — products, tags, design customization, domains, 
            and store pages — works beautifully in one simple platform.
          </p>
          <p className="text-gray-600 font-normal">
            You now have straightforward plan to choose, whether you’re just starting or scaling something bigger. 
            Every plan comes with a full 7-day free trial so you can explore the entire system, customize your store, 
            and see if it fits your workflow. Cancel anytime. No pressure, no commitments.
          </p>
          <p className="text-gray-600 font-bold">
            And yes — you can message our support as much as you want.
            We don’t mind (in fact, we love it).
          </p>
          
          <p className="text-gray-600 font-normal">
            Whether you need a quick video walkthrough, screenshots, or hands-on help with your setup… we’re here. Real people, real replies, real care.
            In a world full of auto-responders and AI bots, we’re keeping the human touch front and center. That’s our promise.
          </p>
          <p className="text-gray-600 font-bold">
            Let’s build something amazing together.
          </p>
        </div>
        <img src="/guy-image.jpg" className="size-[400px]" alt="Description of image" />
      </div>
      {/* <FinalCTA /> */}
    </div>
  );
}
