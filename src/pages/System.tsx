import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Cpu, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const System = () => {
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
                Yard Operating System
              </h1>
              <p className="text-xl text-terminal-gray max-w-3xl mx-auto">
                A comprehensive AI-powered platform that transforms yard operations through computer vision, automation, and intelligent orchestration.
              </p>
            </div>
          </div>
        </section>

        {/* System Features */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">AI Computer Vision</h3>
                <p className="text-terminal-gray">
                  Advanced computer vision technology automates gate check-ins and tracks assets in real-time with unprecedented accuracy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Unified Platform</h3>
                <p className="text-terminal-gray">
                  Single pane of glass visibility across all yard operations with seamless integration to existing WMS/TMS systems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity size={32} className="text-terminal-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Autonomous Workflows</h3>
                <p className="text-terminal-gray">
                  Automated workflows from gate to dock, optimizing load movement and coordination for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Yard?
            </h2>
            <p className="text-lg text-terminal-gray mb-8">
              Discover how Terminal YOS can revolutionize your logistics operations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-terminal-green text-background hover:bg-terminal-green-dim">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// export default System; // Deprecated: replaced by Services page