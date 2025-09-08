
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToExplore = () => {
    const element = document.getElementById("explore");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-terminal-dark relative flex flex-col overflow-hidden">
      {/* Scrolling Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* <ScrollVideo sectionMode /> */}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      {/* Main Hero Content as overlay */}
      <div className="flex-1 flex items-center justify-center pt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              We have reinvented the future of logistics
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              through the yard.
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-terminal-gray mt-12">
              Moving the world by making goods flow.
            </h3>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="pb-8 flex flex-col items-center relative z-10">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center space-y-2 text-terminal-gray hover:text-terminal-green transition-terminal"
        >
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;