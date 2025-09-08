const Customers = () => {
  const customers = [
    { 
      name: "Coca-Cola", 
      logo: "https://a.storyblok.com/f/337048/300x94/ee9cdac15b/coca-cola.svg" 
    },
    { 
      name: "HP", 
      logo: "https://a.storyblok.com/f/337048/2500x2500/6c9f6434ea/hp.svg" 
    }
  ];

  return (
    <section className="py-section bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Trusted by Operators
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {/* First customer logo placeholder */}
          <div className="bg-muted rounded-lg p-8 w-full max-w-sm h-24 flex items-center justify-center">
            <span className="text-terminal-gray text-sm">Customer Logo</span>
          </div>
          
          {customers.map((customer, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img
                src={customer.logo}
                alt={customer.name}
                className="h-12 md:h-16 w-auto filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;