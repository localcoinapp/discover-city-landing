import { MapPin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-dynapuff font-bold bg-gradient-sunset bg-clip-text text-transparent">
            Discover Florida
          </h3>
          <p className="text-white/80 leading-relaxed font-julius max-w-2xl mx-auto">
            Connecting locals and tourists to authentic Florida experiences. 
            Support local businesses, discover hidden gems, and create unforgettable memories.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} DiscoverFlorida.live
          </p>
        </div>
      </div>
    </footer>
  );
};
