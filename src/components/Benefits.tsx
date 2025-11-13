import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  "No coding or technical skills required",
  "Mobile-responsive design out of the box",
  "Unlimited products and tags",
  "SEO-optimized storefront",
  "24/7 customer support",
  "Free updates and new features",
];

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjMwMjM3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Product management dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
                Why Choose StoreBuilder?
              </h2>
              <p className="text-xl text-gray-600">
                We've built the simplest, most powerful way to create your online store. Focus on your products, we'll handle the rest.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* <Button size="lg" className="mt-8">
              Start Your Free Trial
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}