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
  {
    name: "Early Access",
    originalPrice: "$800",
    price: "$500",
    period: "lifetime",
    description: "Limited time offer - Lock in forever",
    badge: "Save $300",
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
  {
    name: "Regular Price",
    price: "$800",
    period: "lifetime",
    description: "Full access to all features",
    features: [
      "Unlimited products",
      "Advanced tagging & categories",
      "Custom branding",
      "Priority support",
      "Advanced analytics",
      "SEO optimization tools",
      "All future features included",
      "Lifetime updates",
    ],
    cta: "Get Started",
    highlighted: false,
    comingSoon: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-sm">Limited Time Offer - 37% Off</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-orange-400"
                  : "bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-1 text-sm hover:bg-orange-500">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Best Value
                  </Badge>
                </div>
              )}

              {plan.comingSoon && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    Available Later
                  </Badge>
                </div>
              )}

              {plan.badge && (
                <div className="mb-4">
                  <Badge className="bg-orange-500 text-white hover:bg-orange-500">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-2xl mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className={`text-2xl line-through ${plan.highlighted ? "text-blue-200" : "text-gray-400"} mb-1`}>
                    {plan.originalPrice}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>
              
              <Button
                size="lg"
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                }`}
                disabled={plan.comingSoon}
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted 
                        ? "bg-white/20" 
                        : "bg-green-100"
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.highlighted ? "text-white" : "text-green-600"
                      }`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-blue-50" : "text-gray-700"}`}>
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
            All plans include 7-day money-back guarantee • No credit card required for free plan
          </p>
        </div>
      </div>
    </section>
  );
}
