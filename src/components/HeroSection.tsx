import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import heroBeach from "@/assets/hero-beach.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for joining our waitlist! We'll notify you when Discover Florida launches.");
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Florida
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
            Your all-in-one app to connect with local offers, deals, and experiences. 
            From restaurants to tours, events to shops – discover Florida like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-3 w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm"
                required
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="whitespace-nowrap"
              >
                Join Waitlist
              </Button>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Multi-language support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              AI-powered recommendations
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              Secure payments
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};