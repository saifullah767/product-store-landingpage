import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Boutique Owner",
    avatar: "SJ",
    content: "I launched my store in under 30 minutes! The tagging system makes it so easy for customers to find products. Sales have increased 300% since switching.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Handmade Crafts Seller",
    avatar: "MC",
    content: "Finally, a platform that doesn't require a developer! I can focus on creating products while StoreBuilder handles everything else. Absolutely love it!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Retailer",
    avatar: "ER",
    content: "The simplicity is unmatched. My team can manage hundreds of products effortlessly. The storefront looks professional and our customers love it.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Loved by Thousands of Sellers
          </h2>
          <p className="text-xl text-gray-600">
            Join successful store owners who trust StoreBuilder to power their online business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}