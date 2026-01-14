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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 animate-in slide-in-from-bottom-4 duration-1000">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <img src="/homi_logo.jpg" alt="Homi Logo" className="h-32 w-32 object-contain" />
              <h1 className="text-5xl md:text-8xl font-bold text-primary" style={{ fontFamily: "'Lato', sans-serif" }}>
                Homi
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
              Fresh lunches. Zero morning stress.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-2" style={{ fontFamily: "'Lato', sans-serif" }}>
              We pick up your home-cooked meals and deliver them to your child at school - fresh, safe, and right on time.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;