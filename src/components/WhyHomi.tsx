import { Heart, Clock, Shield } from "lucide-react";

const WhyHomi = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Because your mornings shouldn't start with stress",
      description: "We handle lunch prep so you can focus on what matters most—quality time with your family."
    },
    {
      icon: Heart,
      title: "More time for you, fresher food for your child",
      description: "Professionally prepared, nutritious meals delivered fresh to school every day."
    },
    {
      icon: Shield,
      title: "Trusted service, student-focused",
      description: "Built by students who understand what families need. Safe, reliable, and accountable."
    }
  ];

  return (
    <section id="why-homi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Parents Choose Homi
            </h2>
            <p className="text-xl text-muted-foreground">
              Join families who trust Homi for their daily lunch needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHomi;
