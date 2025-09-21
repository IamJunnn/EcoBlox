import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, GamepadIcon, Users, Shield, GraduationCap, Phone, Menu, X } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-eco-gradient bg-clip-text text-transparent">
              EcoBlox
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('program')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Program
          </button>
          <button
            onClick={() => handleNavClick('timeline')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Timeline
          </button>
          <button
            onClick={() => handleNavClick('safety')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Safety
          </button>
          <button
            onClick={() => handleNavClick('roles')}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Student Roles
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <ContactPopup>
            <Button variant="outline" className="hidden lg:inline-flex">
              Schedule Discovery Call
            </Button>
          </ContactPopup>
          <Button variant="hero" className="hidden sm:flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Join Next Cohort
          </Button>

          {/* Mobile Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavClick('program')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => handleNavClick('timeline')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={() => handleNavClick('safety')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Safety
            </button>
            <button
              onClick={() => handleNavClick('roles')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Student Roles
            </button>

            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3 border-t border-border">
              <ContactPopup>
                <Button variant="outline" className="w-full">
                  Schedule Discovery Call
                </Button>
              </ContactPopup>
              <Button variant="hero" className="w-full flex items-center justify-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Join Next Cohort
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;