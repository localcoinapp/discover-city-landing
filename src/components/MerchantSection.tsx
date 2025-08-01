import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Zap,
  Store,
  MessageSquare,
  Shield,
  Globe
} from "lucide-react";

const merchantBenefits = [
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Smaller commission than other platforms. No setup fees, no POS required."
  },
  {
    icon: Users,
    title: "More Customers",
    description: "Reach both locals and tourists actively seeking your services."
  },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description: "Fill empty slots and promote special offers to the right audience."
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description: "Go online in minutes. No expensive equipment or complex integration."
  }
];

export const MerchantSection = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.businessName || !formData.contactName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('partnership_inquiries')
        .insert([{
          business_name: formData.businessName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          message: formData.message
        }]);

      if (error) throw error;

      // Send notification email
      await supabase.functions.invoke('send-notification', {
        body: {
          type: 'partnership',
          data: {
            business_name: formData.businessName,
            contact_name: formData.contactName,
            email: formData.email,
            phone: formData.phone,
            business_type: formData.businessType,
            message: formData.message
          }
        }
      });

      toast.success("Thank you! We'll contact you within 24 hours to discuss partnership opportunities.");
      
      // Reset form
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "",
        message: ""
      });
    } catch (error: any) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again or email us directly at localcoinapp@gmail.com");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Merchant Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Partner with Discover Florida
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto mb-12">
            Join Florida's local business community and connect with customers who value authentic experiences
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {merchantBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 md:p-12 shadow-elegant">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Ready to Grow Your Business?
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Support for all business types</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Direct customer communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Verified customer base</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Reach international tourists</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Join hundreds of local Florida businesses already partnered with us. 
                  Get started today – it's free to sign up!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="businessName"
                    placeholder="Business Name *"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="contactName"
                    placeholder="Contact Name *"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  name="businessType"
                  placeholder="Business Type (Restaurant, Tour, Event, Shop, etc.)"
                  value={formData.businessType}
                  onChange={handleInputChange}
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your business and how you'd like to partner with us..."
                  className="min-h-24"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button type="submit" variant="ocean" size="lg" className="w-full">
                  Get Partnership Info
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours to discuss partnership opportunities
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};