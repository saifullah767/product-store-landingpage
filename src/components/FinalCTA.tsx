import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-white">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of successful sellers. Create your store today and start making sales in minutes.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div> */}
          
          <p className="text-sm text-blue-100 pt-4">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}