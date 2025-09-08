import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-section bg-terminal-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Link to="/" className="inline-flex items-center text-terminal-green hover:text-terminal-green-dim transition-terminal mb-8">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About Terminal
              </h1>
              <p className="text-xl text-terminal-gray max-w-3xl mx-auto">
                We're revolutionizing logistics by making goods flow seamlessly through intelligent yard operations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-terminal-gray leading-relaxed mb-6">
                  Terminal Industries was founded with a simple yet ambitious goal: to solve the inefficiencies that plague yard operations worldwide. By combining cutting-edge AI computer vision with autonomous workflows, we're creating a future where goods flow seamlessly from gate to dock.
                </p>
                <p className="text-lg text-terminal-gray leading-relaxed">
                  Our Yard Operating System (YOS™) represents years of research and development, backed by industry leaders who understand the challenges firsthand.
                </p>
              </div>
              <div className="bg-terminal-dark rounded-lg p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-terminal-green mb-2">50+</div>
                    <div className="text-sm text-terminal-gray">Deployments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terminal-green mb-2">99%</div>
                    <div className="text-sm text-terminal-gray">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terminal-green mb-2">24/7</div>
                    <div className="text-sm text-terminal-gray">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-section bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-terminal-gray">
                  We push the boundaries of what's possible in logistics technology, constantly innovating to solve real-world challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Partnership</h3>
                <p className="text-terminal-gray">
                  Built by the industry, for the industry. We work closely with operators to understand and solve their unique challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-terminal-gray">
                  We deliver solutions that exceed expectations, with industry-leading accuracy and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-terminal-gray mb-8">
              Ready to be part of the logistics revolution? Explore career opportunities or get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to="/careers">
                <Button size="lg" className="bg-terminal-green text-background hover:bg-terminal-green-dim">
                  View Careers
                </Button>
              </Link> */}
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;