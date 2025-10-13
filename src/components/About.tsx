const About = () => {
  const benefits = [
    {
      emoji: "⏰",
      title: "Save Time",
      description: "No more hectic mornings"
    },
    {
      emoji: "🎯",
      title: "Reliable Delivery",
      description: "On-time, every time"
    },
    {
      emoji: "🥗",
      title: "Fresh & Healthy",
      description: "Nutritious meals prepared daily"
    },
    {
      emoji: "🎓",
      title: "Student Supported",
      description: "Built by students for families"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Homi
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A student lunchbox delivery service designed to ease the morning rush for parents and ensure students always get fresh food.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary text-center">
              Why Homi Exists
            </h3>
            <p className="text-lg text-foreground leading-relaxed text-center">
              We understand the challenges of busy mornings—the rush to prepare lunch, the worry about food staying fresh, and the stress of making sure your child eats well. Homi was created to solve these problems by providing fresh, nutritious lunches delivered directly to your child's school.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all text-center">
                  <div className="text-5xl mb-4">{benefit.emoji}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
