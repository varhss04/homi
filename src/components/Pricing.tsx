import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
const scrollToRegister = () => {
  const element = document.getElementById("register");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// This function is now handled by Registration component

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with our trial monthly plan
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-card p-8 rounded-2xl border-2 border-primary shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Trial Monthly Plan
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">₹999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Daily fresh lunch delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Delivered directly to school</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Reliable and on-time service</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Complimentary lunchbag provided</span>
                </li>
              </ul>

              <Button
                size="lg"
                className="w-full text-lg py-6"
                onClick={scrollToRegister}
              >
                Get Started
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Prices may vary based on demand and logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
