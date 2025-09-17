import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Store, Truck, Shield, Clock, CreditCard } from "lucide-react";
import appPreview from "@/assets/app-preview.jpg";
import deliveryRider from "@/assets/delivery-rider.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Mobile Ordering",
      description: "Browse restaurants, customize orders, and track delivery in real-time with our intuitive mobile app.",
    },
    {
      icon: Store,
      title: "Local Restaurant Partners",
      description: "Supporting your favorite local eateries and discovering new hidden gems in your neighborhood.",
    },
    {
      icon: Truck,
      title: "Lightning Fast Delivery",
      description: "Professional delivery riders equipped with GPS tracking for efficient and speedy service.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Safe payment processing with Paystack and reliable service you can trust every time.",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Know exactly where your order is from kitchen to your door with live GPS tracking.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay online securely or cash on delivery - whatever works best for you.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How QuickBite
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Works For You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built a complete ecosystem connecting hungry customers, local restaurants, and reliable delivery riders.
          </p>
        </div>

        {/* Three-Part System Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Customer App */}
          <Card className="border-2 border-primary/20 shadow-elegant hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Customer App</h3>
              <p className="text-muted-foreground mb-6">
                Browse, order, and track your favorite meals with our user-friendly mobile application.
              </p>
              <img 
                src={appPreview} 
                alt="QuickBite customer app preview" 
                className="w-full max-w-48 mx-auto rounded-lg shadow-soft"
              />
            </CardContent>
          </Card>

          {/* Restaurant Dashboard */}
          <Card className="border-2 border-accent/20 shadow-elegant hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-success rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Restaurant Panel</h3>
              <p className="text-muted-foreground mb-6">
                Powerful dashboard for restaurants to manage orders, menus, and track their business growth.
              </p>
              <div className="w-full h-32 bg-gradient-card rounded-lg border border-border flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Restaurant Dashboard Preview</div>
              </div>
            </CardContent>
          </Card>

          {/* Rider App */}
          <Card className="border-2 border-warning/20 shadow-elegant hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Rider App</h3>
              <p className="text-muted-foreground mb-6">
                Dedicated app for delivery riders with navigation, earnings tracking, and order management.
              </p>
              <img 
                src={deliveryRider} 
                alt="Professional delivery rider" 
                className="w-full max-w-48 mx-auto rounded-lg shadow-soft"
              />
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-elegant">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;