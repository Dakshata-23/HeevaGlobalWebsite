import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Boxes, FileText, Warehouse, Globe, BadgeCheck, Layers, Network, DollarSign, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Plane size={32} className="text-terminal-green" />,
    title: "Air Freight Forwarding",
    desc: "Certified by IATA, our international air freight services ensure fast, reliable, and secure cargo delivery worldwide. From express shipments to perishable goods, we provide door-to-door global air cargo solutions with full compliance and tracking.",
    highlights: [
      "IATA-certified global air freight forwarder",
      "Express, consolidated, and temperature-controlled shipments",
      "End-to-end documentation & customs support",
    ],
  },
  {
    icon: <Ship size={32} className="text-terminal-green" />,
    title: "Sea Freight Forwarding",
    desc: "We deliver flexible, cost-effective sea freight solutions through direct partnerships with major carriers. Our NVOCC status allows us to offer FCL, LCL, and consolidation services, ensuring optimized shipping costs and reliable transit schedules.",
    highlights: [
      "Global sea freight forwarding from India",
      "FCL & LCL cargo consolidation",
      "Preferential rates via carrier partnerships",
      "Project & oversized cargo handling",
    ],
  },
  {
    icon: <Boxes size={32} className="text-terminal-green" />,
    title: "Cargo Consolidation Services",
    desc: "As neutral consolidators, we specialize in combining multiple consignments into consolidated shipments, reducing per-unit freight costs while maintaining cargo safety and efficiency.",
    highlights: [
      "Significant cost savings on international shipments",
      "Professional cargo packing & palletization",
      "Regular schedules for reliable deliveries",
      "End-to-end customs coordination",
    ],
  },
  {
    icon: <FileText size={32} className="text-terminal-green" />,
    title: "Customs Clearance & Forwarding",
    desc: "With expertise across Mumbai Port, JNPT, and Mumbai Airport, our dedicated team ensures smooth customs clearance for imports and exports. We simplify complex documentation, making trade facilitation seamless.",
    highlights: [
      "Import/export documentation & licenses",
      "Port & airport clearance expertise",
      "Regulatory compliance assurance",
    ],
  },
  {
    icon: <Warehouse size={32} className="text-terminal-green" />,
    title: "Warehousing & Distribution",
    desc: "Our warehousing facilities in Mumbai, Pune, Aurangabad, and Bangalore support international freight operations with advanced storage, inventory management, and distribution solutions.",
    highlights: [
      "3PL warehousing for global freight",
      "Real-time inventory tracking",
      "E-commerce & JIT distribution support",
    ],
  },
];

const whyChoose = [
  { icon: <Globe size={24} className="text-terminal-green" />, text: "International Freight Forwarding Specialists" },
  { icon: <Layers size={24} className="text-terminal-green" />, text: "Neutral Cargo Consolidation Expertise" },
  { icon: <DollarSign size={24} className="text-terminal-green" />, text: "Cost-Optimized & Technology-Driven Services" },
  { icon: <BadgeCheck size={24} className="text-terminal-green" />, text: "IATA & NVOCC Certified Credibility" },
  { icon: <Network size={24} className="text-terminal-green" />, text: "Global Shipping Network Partnerships" },
];

const Services = () => {
  return (
  <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-section bg-terminal-dark relative overflow-hidden">
          {/* Hero background image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/services.webp"
              alt="Services background"
              className="w-full h-full object-cover object-center opacity-40"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <Link to="/" className="inline-flex items-center text-terminal-green hover:text-terminal-green-dim transition-terminal mb-8">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Services Overview
              </h1>
              <p className="text-xl text-terminal-white max-w-3xl mx-auto">
                In today’s interconnected trade environment, businesses need a trusted partner for efficient and cost-effective cargo movement. Heeva Global specializes in international freight forwarding and neutral consolidation services, supported by modern warehousing and strong customs brokerage expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* First row: first 3 services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 items-stretch">
              {services.slice(0, 3).map((service, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl shadow p-8 text-center flex flex-col items-center h-full flex-1"
                >
                  <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-terminal-gray mb-4">{service.desc}</p>
                  <ul className="text-left text-terminal-gray space-y-2">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start"><span className="mr-2 text-terminal-green">•</span>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Second row: last 2 services centered */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mt-16 items-stretch">
              {services.slice(3).map((service, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl shadow p-8 text-center flex flex-col items-center h-full flex-1 w-full md:w-[400px]"
                >
                  <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-terminal-gray mb-4">{service.desc}</p>
                  <ul className="text-left text-terminal-gray space-y-2">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start"><span className="mr-2 text-terminal-green">•</span>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-section bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-20">
              Why Choose Us?
            </h2>
            <div className="flex flex-col items-center gap-4 mb-8 w-full">
              {/* First 4 items in a 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-4">
                {whyChoose.slice(0,4).map((item, idx) => (
                  <div key={idx} className="flex flex-row items-center justify-start gap-3 text-lg text-terminal-gray">
                    <span>{item.icon}</span>
                    <span className="text-left">{item.text}</span>
                  </div>
                ))}
              </div>
              {/* Fifth item centered below */}
              <div className="flex flex-row justify-center gap-10 w-full">
                <div className="flex flex-row items-center justify-start gap-3 text-lg text-terminal-gray">
                  <span>{whyChoose[4].icon}</span>
                  <span className="text-left">{whyChoose[4].text}</span>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-terminal-green text-background hover:bg-terminal-green-dim">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

import { ArrowLeft } from "lucide-react";
export default Services;