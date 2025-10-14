const Founder = () => {
  return (
    <section className="py-20 bg-secondary/20 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the Founder
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Anirudh Muralidhar
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Student at BMSCE
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  I'm passionate about solving real problems for families. Homi was born from understanding the daily challenges parents face and wanting to make a meaningful difference in the lives of students and their families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
