import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Press = () => {
  const pressReleases = [
    {
      title: "Terminal Industries Raises $50M Series B to Accelerate Yard Automation",
      date: "2024-01-15",
      excerpt: "Leading logistics technology company secures funding from top-tier investors to expand AI-powered yard operations platform.",
      source: "TechCrunch"
    },
    {
      title: "Ryder Partners with Terminal Industries for Next-Gen Yard Management",
      date: "2023-11-08", 
      excerpt: "Strategic partnership brings AI computer vision technology to Ryder's nationwide network of distribution centers.",
      source: "Supply Chain Dive"
    },
    {
      title: "Terminal Industries Named to FreightTech 100 List",
      date: "2023-09-22",
      excerpt: "Recognition as one of the most innovative companies transforming the freight and logistics industry.",
      source: "FreightWaves"
    }
  ];

  const awards = [
    "FreightTech 100 - Most Innovative Companies (2023)",
    "Logistics Technology Award - Best AI Solution (2023)",
    "Supply Chain Innovation Award (2022)"
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
                Press & Media
              </h1>
              <p className="text-xl text-terminal-gray max-w-3xl mx-auto">
                Latest news, announcements, and media coverage about Terminal Industries and our revolutionary yard automation technology.
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-section bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Recent Press Releases</h2>
            
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <article key={index} className="border border-terminal-border rounded-lg p-6 hover:border-terminal-green transition-terminal">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {release.title}
                      </h3>
                      <div className="flex items-center text-sm text-terminal-gray mb-3">
                        <Calendar size={16} className="mr-2" />
                        {new Date(release.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                        <span className="mx-2">•</span>
                        <span>{release.source}</span>
                      </div>
                      <p className="text-terminal-gray leading-relaxed">
                        {release.excerpt}
                      </p>
                    </div>
                    <ExternalLink size={20} className="text-terminal-green ml-4 flex-shrink-0" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-section bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Awards & Recognition</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Industry Awards</h3>
                <ul className="space-y-4">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-terminal-gray">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Media Kit</h3>
                <p className="text-terminal-gray mb-6">
                  Download our media kit for high-resolution logos, product images, and company information.
                </p>
                <button className="text-terminal-green hover:text-terminal-green-dim transition-terminal font-medium">
                  Download Media Kit →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-section bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Media Inquiries</h2>
            <p className="text-lg text-terminal-gray mb-8">
              For press inquiries, interviews, or media requests, please contact our communications team.
            </p>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-foreground font-medium mb-2">Press Contact</p>
              <p className="text-terminal-gray">press@terminal-industries.com</p>
              <p className="text-terminal-gray">(555) 123-4567</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;