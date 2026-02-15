import { Button } from "./ui/button";
import { Check, Sparkles, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

const plans = [
  // {
  //   name: "Starter",
  //   price: "Free",
  //   period: "forever",
  //   description: "Perfect for testing the waters",
  //   features: [
  //     "Up to 10 products",
  //     "Basic tagging system",
  //     "Mobile-responsive storefront",
  //     "Community support",
  //     "StoreBuilder branding",
  //   ],
  //   cta: "Start Free",
  //   highlighted: false,
  // },
  
  // {
  //   name: "Regular Price",
  //   price: "800 PKR",
  //   period: "month",
  //   description: "Full access to all features",
  //   features: [
  //     "Unlimited products",
  //     "Advanced tagging & categories",
  //     "Custom branding",
  //     "Priority support",
  //     "Advanced analytics",
  //     "SEO optimization tools",
  //     "All future features included",
  //     "Lifetime updates",
  //   ],
  //   cta: "Get Started",
  //   highlighted: false,
  //   comingSoon: true,
  // },
  {
    name: "Early Access",
    originalPrice: "2000 PKR",
    price: "1000 PKR",
    period: "month",
    description: "Limited time offer - Lock in forever",
    badge: "Save 300 PKR",
    features: [
      "Unlimited products",
      "Advanced tagging & categories",
      "Custom branding (no StoreBuilder logo)",
      "Priority support",
      "Advanced analytics",
      "SEO optimization tools",
      "Early access to all new features",
      "Lifetime updates",
      "Custom domain support (coming soon)",
      "Premium themes (coming soon)",
    ],
    cta: "Claim Early Access",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-sm">Limited Time Offer - 50% Off</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto */}
        <div className="flex flex-col items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-white shadow-2xl scale-105 border-4 border-emerald-400"
                  : " bg-slate-200 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg"
              } transition-all duration-300 max-w-lg w-full`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white px-4 py-1 text-sm hover:bg-emerald-500">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Best Value
                  </Badge>
                </div>
              )}

              {/* {plan.comingSoon && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    Available Later
                  </Badge>
                </div>
              )} */}

              {/* {plan.badge && (
                <div className="mb-4">
                  <Badge className="bg-orange-500 text-white hover:bg-orange-500">
                    {plan.badge}
                  </Badge>
                </div>
              )} */}
              
              <div className="mb-6">
                <h3 className={`text-2xl mb-2 ${plan.highlighted ? "text-gray-800" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className={`text-2xl line-through text-gray-400 mb-1`}>
                    {plan.originalPrice}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-semibold ${plan.highlighted ? "text-gray-800" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg `}>
                    /{plan.period}
                  </span>
                </div>
              </div>
              
              <Button
                size="lg"
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-slate-800 text-white open-access-modal"
                    : "bg-slate-400 text-gray-900"
                }`}
                disabled={plan.comingSoon}
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-green-100`}>
                      <Check className={`h-3 w-3 text-green-600`} />
                    </div>
                    <span className={`text-sm text-gray-700`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            All plans include a 7-day money-back guarantee - no credit card required for the free plan
          </p>
        </div>
      </div>
    </section>
  );
}
