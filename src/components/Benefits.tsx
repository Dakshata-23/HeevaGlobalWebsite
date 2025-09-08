const Benefits = () => {
  const benefits = [
    {
      number: "01",
      title: "A single solution for maximum, automated throughput",
      description: "Deep integrations anticipate incoming loads, enabling our AI computer vision technology to automate gate check-ins and all critical yard operations: from assigning locations and maintaining real-time visibility to coordinating spotters for efficient load movement. It then closes the loop by validating assets before exit, providing comprehensive performance supervision across your entire yard network"
    },
    {
      number: "02", 
      title: "Easy, scalable operation",
      description: "Terminal was designed from the ground up for disruption-free operations. Easy to deploy and support, the system has a low IT lift with no 3rd party devices to support, and a modern UI/UX that's super-easy for operators to use from day one. Configurable to your yard, Terminal YOS integrates seamlessly with most TMS and WMS systems."
    },
    {
      number: "03",
      title: "Rapid, repeatable ROI", 
      description: "We know that yard operations run on lean budgets, which is why we price our all-inclusive solution as a service with terms that won't bust the bank. Ready to deploy right away, and rapid to scale over time."
    }
  ];

  return (
    <section className="py-section bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Benefit Number */}
              <div className="lg:col-span-2">
                <span className="text-terminal-gray text-sm font-medium mb-2 block">
                  Benefit {benefit.number}
                </span>
              </div>
              
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {benefit.title.split('**').map((part, i) => 
                    i % 2 === 1 ? (
                      <span key={i} className="text-terminal-green">{part}</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </h3>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-6">
                <p className="text-lg text-terminal-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;