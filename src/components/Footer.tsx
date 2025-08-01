import { MapPin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
              Discover Florida
            </h3>
            <p className="text-white/80 leading-relaxed">
              Connecting locals and tourists to authentic Florida experiences. 
              Support local businesses, discover hidden gems, and create unforgettable memories.
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Florida, United States</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">App Features</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Multi-language Support</li>
              <li>• AI-powered Recommendations</li>
              <li>• Secure International Payments</li>
              <li>• Direct Merchant Chat</li>
              <li>• Real-time Booking</li>
              <li>• Local Community Focus</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:localcoinapp@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  localcoinapp@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-white/80">Available throughout Florida</span>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-white/60 text-sm">
                Supporting local Florida businesses since 2024
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Discover Florida. Proudly supporting local Florida communities.
          </p>
        </div>
      </div>
    </footer>
  );
};