import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-coffee-brown">
            Artisan Coffee House
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-near-black hover:text-coffee-brown transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("menu")}
              className="text-near-black hover:text-coffee-brown transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection("location")}
              className="text-near-black hover:text-coffee-brown transition-colors"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-near-black hover:text-coffee-brown transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-coffee-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-near-black hover:text-coffee-brown transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-near-black hover:text-coffee-brown transition-colors text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("location")}
                className="text-near-black hover:text-coffee-brown transition-colors text-left"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-near-black hover:text-coffee-brown transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
