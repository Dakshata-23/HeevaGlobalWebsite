import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-darker border-t border-terminal-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4" onClick={scrollToTop}>
              <div className="w-8 h-8 bg-terminal-green rounded flex items-center justify-center">
                <span className="text-background font-bold">T</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Terminal</span>
            </Link>
            <p className="text-terminal-gray text-sm leading-relaxed mb-6">
              Reinventing the future of logistics through the yard. Moving the world by making goods flow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-terminal-gray hover:text-terminal-green transition-terminal text-sm" onClick={scrollToTop}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-terminal-gray hover:text-terminal-green transition-terminal text-sm" onClick={scrollToTop}>
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-terminal-gray hover:text-terminal-green transition-terminal text-sm" onClick={scrollToTop}>
                  Our Services
                </Link>
              </li> 
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-terminal-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-terminal-gray text-sm">
            © {currentYear} Terminal Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-terminal-gray hover:text-terminal-green transition-terminal text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-terminal-gray hover:text-terminal-green transition-terminal text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;