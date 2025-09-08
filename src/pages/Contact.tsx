import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact | Terminal Industries</title>
        <meta name="description" content="Contact Terminal Industries for inquiries, support, or partnership opportunities." />
        <meta name="keywords" content="contact, terminal, logistics, support, inquiry" />
      </Helmet>
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
                Get in Touch
              </h1>
              <p className="text-xl text-terminal-gray max-w-3xl mx-auto">
                Ready to transform your yard operations? Let's discuss how Terminal YOS can revolutionize your logistics workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-secondary border-terminal-border text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-secondary border-terminal-border text-foreground"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary border-terminal-border text-foreground"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-secondary border-terminal-border text-foreground resize-none"
                      placeholder="Tell us about your yard operations and how we can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-terminal-green text-background hover:bg-terminal-green-dim group"
                  >
                    Send Message
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-terminal-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-terminal-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-terminal-gray">hello@terminal-industries.com</p>
                      <p className="text-terminal-gray">sales@terminal-industries.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-terminal-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-terminal-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-terminal-gray">+1 (555) 123-4567</p>
                      <p className="text-terminal-gray text-sm">Monday - Friday, 9AM - 6PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-terminal-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-terminal-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Office</h3>
                      <p className="text-terminal-gray">123 Innovation Drive</p>
                      <p className="text-terminal-gray">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links
                <div className="mt-12 p-6 bg-secondary rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Looking for something specific?</h3>
                  <div className="space-y-2">
                    <Link to="/services" className="block text-terminal-green hover:text-terminal-green-dim transition-terminal">
                      → Explore our Services
                    </Link>
                    <Link to="/careers" className="block text-terminal-green hover:text-terminal-green-dim transition-terminal">
                      → View Career Opportunities
                    </Link>
                    <Link to="/press" className="block text-terminal-green hover:text-terminal-green-dim transition-terminal">
                      → Press & Media Inquiries
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-section bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">We'll get back to you quickly</h2>
            <p className="text-terminal-gray">
              Our team typically responds within 24 hours. For urgent inquiries, please call us directly.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;