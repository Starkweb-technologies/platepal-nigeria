import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Star } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFood} 
          alt="Delicious Nigerian cuisine" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium mb-8 shadow-elegant">
            <Star className="w-4 h-4 fill-current" />
            Coming Soon to Abuja
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Authentic Nigerian
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Flavors Delivered
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            From your favorite local restaurants to your doorstep in minutes. Experience the taste of home with secure payments and real-time tracking.
          </p>

          {/* Location Input */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Enter your delivery address..."
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-border focus:border-primary transition-smooth shadow-soft"
              />
              <Button 
                size="icon" 
                variant="hero"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-lg"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="min-w-48">
              Join Waitlist
            </Button>
            <Button variant="outline" size="xl" className="min-w-48 border-2 hover:border-primary transition-smooth">
              For Restaurants
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Partner Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">30min</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-warning">4.8★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;