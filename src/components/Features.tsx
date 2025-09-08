const Features = () => {
  const features = [
    "Autonomous, integrated workflows starting at the gate",
    "Single pane of glass visibility of all yard operations", 
    "Managed by a unified platform with AI computer vision",
    "Highly configurable to all yards in your network",
    "Unlocked value of your existing WMS/TMS",
    "Digitally transformed, data rich, and predictive"
  ];

  return (
    <section id="explore" className="py-section bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* YOS Section */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-terminal-gray mb-4">That's the</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Yard Operating System.
            </h2>
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <span className="text-3xl md:text-4xl font-bold text-terminal-green">YOS™</span>
              <span className="text-3xl md:text-4xl font-bold text-terminal-green opacity-60">YOS™</span>
            </div>
            
            {/* Digital Numbers Animation */}
            <div className="mt-12 grid grid-cols-10 gap-2 opacity-40">
              {Array.from({ length: 20 }, (_, i) => (
                <span key={i} className="text-terminal-green text-sm font-mono">
                  {i % 10}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;