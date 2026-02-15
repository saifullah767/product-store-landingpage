import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      <div className="relative container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="text-center mx-auto space-y-8 mb-16">
          <h1 className="text-5xl md:text-7xl leading-tight">
              Start 
              <span className="font-medium text-emerald-400"> Earning </span> 
              Today.
          </h1>

                    {/* <h2 className="text-3xl md:text-3xl font-light text-gray-300">
            Online Store Builder For Businesses. <br /> Start earning with a store you’re proud to share.
          </h2> */}
           <p className="text-3xl md:text-3xl font-light text-gray-300">
            Create a clean store <span className="font-semibold text-brand-text">in minutes.</span><br className="hidden sm:block" />
            Add products, organize by categories,<br className="hidden sm:block" />
            and share your link.
          </p>

          <button
              className="open-access-modal mx-auto px-10 block rounded-lg bg-emerald-600 text-white ring-2 ring-emerald-400 px-3 py-2.5 text-lg font-semibold"
          >
              <img src="/logo-dark.svg" alt="" className="inline-block mr-2 h-6 w-6" />
              Create My Store <span className="font-normal"> (Free) </span>
          </button>

          <div>
            <video src="/store-hero-section-banner-video.mp4" autoPlay muted loop className="w-full mx-auto"></video>
          </div>

                    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            No coding. No complexity. Just add products, categories them, and watch your sales grow. 
            Your professional online store is <span className="text-emerald-500">ready in 5 minutes</span>.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* <a
              href="javascript:void(0)"
              className="max-w-xs mx-auto block open-access-modal rounded-lg bg-slate-100 hover:bg-slate-200 text-gray-800 px-3 py-2.5 text-lg font-semibold"
          >
              <img src="/logo-dark.svg" alt="" className="inline-block mr-2 h-6 w-6" />
              Start Free Trial
          </a> */}
        </div>
      </div>
    </section>
  );
}
