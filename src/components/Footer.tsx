import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">QuickBite</h3>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Nigeria's premier food delivery service, connecting you with authentic local flavors. From traditional jollof rice to modern fusion cuisine, we bring the taste of home to your doorstep.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">For Partners</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                  Restaurant Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                  Become a Rider
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                  Partner Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">
                  Plot 123, Wuse 2, Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">
                  +234 901 234 5678
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">
                  hello@quickbite.ng
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/80 text-sm">
            © 2024 QuickBite. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;