import { Palette, LayoutDashboard, Globe, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const upcomingFeatures = [
  {
    icon: Palette,
    title: "Store Themes & Templates",
    description: "Choose from beautiful pre-designed themes or customize every aspect of your store's look and feel. Make it truly yours.",
    status: "Coming Q2 2025",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: LayoutDashboard,
    title: "Next-Level Dashboard",
    description: "Advanced analytics, inventory management, customer insights, and AI-powered recommendations to grow your business faster.",
    status: "Coming Q2 2025",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Custom Domain Connection",
    description: "Connect your own domain and build your brand. Professional email addresses and SSL certificates included.",
    status: "Coming Q3 2025",
    gradient: "from-purple-500 to-indigo-500",
  },
];

export function ComingSoon() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-purple-700">Roadmap Preview</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What's Coming Next
          </h2>
          <p className="text-xl text-gray-600">
            We're constantly innovating to bring you more powerful features. Here's what's on the horizon.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                {/* Status badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-4 w-fit bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {feature.status}
                </Badge>
                
                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                
                {/* Animated indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                  <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`} />
                  <span>In Development</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-900">
              Want early access to new features?
            </p>
            <p className="text-sm text-gray-600">
              Join our beta program and be the first to test upcoming features. Provide feedback and shape the future of StoreBuilder.
            </p>
            {/* <button className="mt-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
              Join Beta Program
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}