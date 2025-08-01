import appRestaurantSearch from "@/assets/app-restaurant-search.jpg";
import appEvents from "@/assets/app-events.jpg";
import appChat from "@/assets/app-chat.jpg";
import appPayment from "@/assets/app-payment.jpg";

const scenarios = [
  {
    title: "Find Amazing Restaurants",
    description: "Sarah, a tourist from Germany, discovers a hidden gem Cuban restaurant with authentic reviews and instant booking. The app translates menus and helps her communicate dietary preferences.",
    image: appRestaurantSearch,
    stats: "500+ Local Restaurants"
  },
  {
    title: "Discover Events & Nightlife",
    description: "Mike finds exclusive DJ performances and local parties that aren't advertised to tourists. He pre-books VIP access and skips the lines at South Beach's hottest clubs.",
    image: appEvents,
    stats: "200+ Weekly Events"
  },
  {
    title: "Chat with Local Merchants",
    description: "Elena uses AI-powered translation to chat with a local tour guide in Spanish, customizing her Everglades tour and learning about hidden spots only locals know.",
    image: appChat,
    stats: "Real-time Translation"
  },
  {
    title: "Secure Smart Payments",
    description: "Alex saves $50 in ATM and exchange fees during his week-long vacation by using the app's integrated payment system for all his local experiences and purchases.",
    image: appPayment,
    stats: "Save up to 80% on fees"
  }
];

export const AppShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Discover Florida in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories of how tourists and locals connect through our app
          </p>
        </div>

        <div className="space-y-20">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-tropical text-white rounded-full text-sm font-medium">
                  {scenario.stats}
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  {scenario.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {scenario.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-sunset rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img 
                    src={scenario.image} 
                    alt={scenario.title}
                    className="relative w-64 md:w-80 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};