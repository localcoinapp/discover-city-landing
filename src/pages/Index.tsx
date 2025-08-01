import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AppShowcase } from "@/components/AppShowcase";
import { MerchantSection } from "@/components/MerchantSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AppShowcase />
      <MerchantSection />
      <Footer />
    </div>
  );
};

export default Index;
