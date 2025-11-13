import { Package, Tags, Store, Zap, BarChart3, Lock } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Product Management",
    description: "Easily add, edit, and organize your products with an intuitive dashboard. Upload images, set prices, and manage inventory effortlessly.",
  },
  {
    icon: Tags,
    title: "Smart Tagging System",
    description: "Organize products with custom tags. Help customers find exactly what they're looking for with powerful categorization.",
  },
  {
    icon: Store,
    title: "Instant Storefront",
    description: "Get a beautiful, mobile-responsive store the moment you sign up. Your products are ready to sell immediately.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "No technical skills required. Create your store and add products in minutes, not days or weeks.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track your performance with real-time analytics. Understand what's selling and optimize your strategy.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security keeps your store and customer data safe. 99.9% uptime guaranteed.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Everything You Need to Sell Online
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you launch and grow your online business with ease.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}