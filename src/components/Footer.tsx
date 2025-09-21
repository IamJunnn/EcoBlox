import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPopup from "@/components/ContactPopup";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">EcoBlox</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Revolutionary STEM education program combining environmental education, 
              coding, and project management through multiplayer game creation.
            </p>
            <p className="text-secondary font-medium text-lg italic">
              "Nurture digital native talent who think about the environment through games in a safe online environment!"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Program</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#program"
                  className="text-background/80 hover:text-secondary transition-all duration-300 hover:translate-x-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Program Details
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-background/80 hover:text-secondary transition-all duration-300 hover:translate-x-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-background/80 hover:text-secondary transition-all duration-300 hover:translate-x-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('safety')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Safety & Digital Citizenship
                </a>
              </li>
              <li>
                <a
                  href="#roles"
                  className="text-background/80 hover:text-secondary transition-all duration-300 hover:translate-x-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Student Roles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Started</h4>
            <ul className="space-y-4">
              <li>
                <ContactPopup>
                  <Button variant="secondary" className="w-full justify-start hover:scale-105 transition-all duration-300">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Discovery Call
                  </Button>
                </ContactPopup>
              </li>
              <li>
                <ContactPopup>
                  <Button variant="outline" className="w-full justify-start border-background/20 text-background hover:bg-background/10 hover:scale-105 transition-all duration-300">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </ContactPopup>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © 2024 EcoBlox. All rights reserved. Building the next generation of environmental innovators.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;