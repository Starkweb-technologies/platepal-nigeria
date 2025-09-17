import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "You'll be among the first to know when we launch in Abuja.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <Bell className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Be First in Line for
              <span className="block">Great Food</span>
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join our exclusive waitlist and be among the first to experience QuickBite when we launch in Abuja. Plus, get special early-bird perks!
            </p>
          </div>

          {/* Waitlist Form */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-glow mb-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:bg-white/30 transition-smooth"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-white text-primary hover:bg-white/90 font-semibold min-w-32"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Perks */}
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 mb-3 text-white/80" />
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm text-white/80">On your first 3 orders</p>
            </div>
            <div className="flex flex-col items-center">
              <Bell className="w-8 h-8 mb-3 text-white/80" />
              <h3 className="font-semibold mb-2">Early Access</h3>
              <p className="text-sm text-white/80">Be first to download</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3 text-white/80" />
              <h3 className="font-semibold mb-2">Exclusive Updates</h3>
              <p className="text-sm text-white/80">Launch news & offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;