import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  CreditCard, 
  MessageCircle, 
  Globe, 
  Zap, 
  Shield,
  Calendar,
  Star
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Discover Local Gems",
    description: "Find restaurants, tours, events, and shops that locals love. From hidden beach bars to exclusive DJ sets."
  },
  {
    icon: CreditCard,
    title: "Smart Payments",
    description: "Save on transaction fees with built-in payment features. Perfect for international tourists avoiding ATM fees."
  },
  {
    icon: MessageCircle,
    title: "Direct Merchant Chat",
    description: "Chat directly with business owners and service providers. Get personalized recommendations and ask questions."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "AI-powered language translation breaks down barriers and helps tourists communicate seamlessly."
  },
  {
    icon: Zap,
    title: "AI Recommendations",
    description: "Get tailored suggestions based on your preferences, location, and past activities. Discover experiences you'll love."
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "Pre-screened merchants and agreed prices protect tourists from scams and ensure quality experiences."
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Reserve tables, book tours, buy event tickets – all in one app with instant confirmation."
  },
  {
    icon: Star,
    title: "Local Community",
    description: "Support locally-owned businesses and discover authentic Florida experiences beyond tourist traps."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dynapuff font-bold text-foreground mb-6">
            Why Choose Discover Florida?
          </h2>
          <p className="text-xl font-julius text-muted-foreground max-w-3xl mx-auto">
            More than just another travel app – we're your personal guide to authentic Florida experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};