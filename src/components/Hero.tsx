import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Play, CheckCircle2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="relative container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">StoreBuilder</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            {/* <Button variant="outline">Sign In</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free
            </Button> */}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="text-center max-w-5xl mx-auto space-y-8 mb-16">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 px-4 py-2 rounded-full shadow-sm">
            <TrendingUp className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-gray-700">Trusted by 10,000+ sellers worldwide</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div> */}
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl text-gray-900 leading-tight">
            Build Your Dream Store.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Start Selling Today.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            No coding. No complexity. Just add products, tag them, and watch your sales grow. 
            Your professional online store is <span className="text-purple-600">ready in 5 minutes</span>.
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
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-gray-600">
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
        <div className="max-w-7xl mx-auto">
          {/* Main Dashboard Screenshot */}
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

          {/* Secondary Screenshots Grid */}
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
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
            <div className="text-sm text-gray-600 mt-2">Active Stores</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$50M+</div>
            <div className="text-sm text-gray-600 mt-2">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99.9%</div>
            <div className="text-sm text-gray-600 mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5 min</div>
            <div className="text-sm text-gray-600 mt-2">Setup Time</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}