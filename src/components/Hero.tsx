import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lunchbox-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          opacity: 0.15
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Fresh Lunches. Peace of Mind.{" "}
            <span className="text-primary">Powered by Homi.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Helping parents save time and giving students fresh, healthy food delivered right to their school.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("register")}
              className="text-lg px-8 py-6 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🥗</div>
              <h3 className="font-semibold text-lg mb-2">Fresh & Healthy</h3>
              <p className="text-muted-foreground">Nutritious meals prepared daily</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">⏰</div>
              <h3 className="font-semibold text-lg mb-2">Save Time</h3>
              <p className="text-muted-foreground">No more hectic mornings</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Reliable Delivery</h3>
              <p className="text-muted-foreground">On-time, every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
