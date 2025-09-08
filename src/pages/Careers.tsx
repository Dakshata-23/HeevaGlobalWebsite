import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Software Engineer - AI/Computer Vision",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead the development of our AI computer vision platform that powers yard automation."
    },
    {
      title: "Product Manager - Logistics Solutions",
      department: "Product",
      location: "Remote",
      type: "Full-time", 
      description: "Drive product strategy for our yard operating system and customer integrations."
    },
    {
      title: "Field Operations Specialist",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Deploy and support Terminal YOS installations at customer sites nationwide."
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Atlanta, GA",
      type: "Full-time",
      description: "Partner with enterprise customers to implement Terminal's logistics solutions."
    }
  ];

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "World-Class Team",
      description: "Work alongside industry experts and innovators who are passionate about transforming logistics."
    },
    {
      icon: <Target size={24} />,
      title: "Mission-Driven",
      description: "Make a real impact on global supply chains and help move the world's goods more efficiently."
    },
    {
      icon: <Zap size={24} />,
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI, computer vision, and automation technologies at scale."
    }
  ];

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
                Join Our Team
              </h1>
              <p className="text-xl text-terminal-gray max-w-3xl mx-auto">
                Help us revolutionize logistics and build the future of yard operations. We're looking for talented individuals who want to make a meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Terminal?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-terminal-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-terminal-green">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-terminal-gray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-section bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Open Positions</h2>
              <p className="text-lg text-terminal-gray">
                Explore our current job opportunities and find your next career move.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-background border border-terminal-border rounded-lg p-6 hover:border-terminal-green transition-terminal">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                      <p className="text-terminal-gray mb-4 lg:mb-0">{job.description}</p>
                    </div>
                    
                    <div className="lg:ml-8 lg:text-right">
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 text-sm text-terminal-gray mb-4">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {job.type}
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-terminal-green text-background hover:bg-terminal-green-dim"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Culture</h2>
                <p className="text-lg text-terminal-gray leading-relaxed mb-6">
                  At Terminal, we believe in fostering an environment where innovation thrives. Our team is built on collaboration, continuous learning, and a shared passion for solving complex logistics challenges.
                </p>
                <p className="text-lg text-terminal-gray leading-relaxed">
                  We're committed to diversity, inclusion, and creating opportunities for growth at every level.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Benefits & Perks</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-terminal-gray">Comprehensive health, dental, and vision insurance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-terminal-gray">Equity participation in a fast-growing company</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-terminal-gray">Flexible work arrangements and unlimited PTO</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-terminal-gray">Learning and development budget</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-terminal-gray">Top-tier equipment and modern office spaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Don't See the Right Role?</h2>
            <p className="text-lg text-terminal-gray mb-8">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission.
            </p>
            <Button size="lg" className="bg-terminal-green text-background hover:bg-terminal-green-dim">
              Send Us Your Resume
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;