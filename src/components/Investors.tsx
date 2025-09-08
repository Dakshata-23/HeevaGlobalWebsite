const Investors = () => {
  const investors = [
    { name: "Ryder", logo: "https://a.storyblok.com/f/337048/147x41/4343e31b5a/ryder.svg" },
    { name: "Prologis", logo: "https://a.storyblok.com/f/337048/181x34/ff208a2c17/prologis.svg" },
    { name: "NFI", logo: "https://a.storyblok.com/f/337048/118x46/d178bf93df/nfi.svg" },
    { name: "Lineage", logo: "https://a.storyblok.com/f/337048/170x44/9386c9fae8/lineage.svg" },
    { name: "8VC", logo: "https://a.storyblok.com/f/337048/114x45/04e08dca33/8vc.svg" }
  ];

  return (
    <section className="py-section bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Built by the Industry
          </h2>
        </div>

        {/* Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
              "We have not seen this kind of accuracy with computer-vision technology… this is a significant milestone in the race to modernize the yard."
            </blockquote>
            
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">Karen Jones</p>
              <p className="text-terminal-gray">Head of New Product</p>
              <p className="text-terminal-gray">Ryder System, Inc.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src="https://a.storyblok.com/f/337048/5112x3410/74c4e40128/quote-image.jpg/m/800x0/filters:format(jpeg):quality(85)"
              alt="Testimonial"
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;