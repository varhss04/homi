import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 9886757800</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">homi.delivers@gmail.com</p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
