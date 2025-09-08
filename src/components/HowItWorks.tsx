import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-section bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          How it Works
        </h2>
        
        <Link to="/system">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-background transition-terminal group"
          >
            Take a closer look
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;