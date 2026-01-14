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

const About = () => {
  const benefits = [
    {
      icon: "⏰",
      title: "Save Time",
      description: "No more hectic mornings"
    },
    {
      icon: "🎯",
      title: "Reliable Delivery",
      description: "On-time, every time"
    },
    {
      icon: "🥗",
      title: "Fresh and Hot",
      description: "Students can enjoy fresh and hot home food right on time."
    },
    {
      icon: "🎓",
      title: "Student Supported",
      description: "Built by students for families"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background animate-in slide-in-from-bottom-4 duration-1000 delay-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-900 via-emerald-900 to-yellow-900 bg-clip-text text-transparent mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
              About Homi
            </h2>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Homi is a lunch box delivery service designed to simplify mornings for parents. Instead of rushing to prepare lunch before school, parents can cook later in peace after their child leaves. Our team picks up the freshly prepared meal from your home and delivers it safely to the school just before lunchtime.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mt-6 font-semibold">
                With Homi, parents enjoy stress-free mornings, and children receive fresh, home-cooked meals made the same morning - healthy, warm, and filled with care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all text-center">
                <div className="text-5xl mb-4 p-3 border-2 border-green-600 rounded-lg inline-block">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, WhyHomi };
export default About;