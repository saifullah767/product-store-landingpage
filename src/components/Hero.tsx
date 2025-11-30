import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="text-center max-w-5xl mx-auto space-y-8 mb-16">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl leading-tight">
              Start 
              <span className="font-medium bg-gradient-to-r from-[#2965F1] to-sky-400 bg-clip-text text-transparent"> Earning </span> 
              Today.
          </h1>
          <h2 className="text-3xl md:text-3xl font-light text-gray-300">
            Online Store Builder For Businesses.
          </h2>

          <a
              href="javascript:void(0)"
              className="max-w-xs mx-auto block open-access-modal rounded-lg bg-slate-100 hover:bg-slate-200 text-gray-800 px-3 py-2.5 text-lg font-semibold"
          >
              <img src="/logo-dark.svg" alt="" className="inline-block mr-2 h-6 w-6" />
              Start Free Trial
          </a>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            No coding. No complexity. Just add products, tag them, and watch your sales grow. 
            Your professional online store is <span className="text-sky-400">ready in 5 minutes</span>.
          </p>
          
          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg h-14 px-8">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg h-14 px-8 border-2 hover:bg-gray-50">
              <Play className="h-5 w-5" />
              Watch 2-min Demo
            </Button>
          </div> */}
          
          {/* Trust Indicators */}
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
        </div>

        {/* Product Screenshots */}
        {/* 
         */}
        <div className="max-w-7xl mx-auto">

          {/* 
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 transform scale-95" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              <ImageWithFallback
                src="/dashboard.png"
                alt="StoreBuilder Dashboard"
                className="rounded-xl w-full"
              />
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 transform scale-95" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              <ImageWithFallback
                src="/Screenshot 2025-11-11 231824.png"
                alt="StoreBuilder Dashboard"
                className="rounded-xl w-full"
              />
            </div>
          </div>
          */}

          {/* Secondary Screenshots Grid */}
          {/* 
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="p-2">
                    <ImageWithFallback
                      src="/create-product.png"
                      alt="Product Management"
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-600">Product Creation</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="p-2">
                    <ImageWithFallback
                      src="/tag-creation.png"
                      alt="Product Catalog"
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-600">Tag Creation</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="p-2">
                    <ImageWithFallback
                      src="/domain-setting.png"
                      alt="Mobile Shopping"
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-600">Domain Setting</p>
                  </div>
                </div>
              </div>
            </div>
           */}
        </div>

      </div>
    </section>
  );
}
