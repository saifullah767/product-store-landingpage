import { UserPlus, Package, Tags, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds. No credit card required to get started.",
    step: "01",
  },
  {
    icon: Package,
    title: "Add Products",
    description: "Upload your products with images, descriptions, and pricing. Simple and intuitive.",
    step: "02",
  },
  {
    icon: Tags,
    title: "Organize with Tags",
    description: "Add custom tags to categorize your products and make them easy to discover.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Launch & Sell",
    description: "Share your store link and start selling. It's that simple!",
    step: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Launch Your Store in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            From signup to your first sale in minutes. No technical expertise needed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}