export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-white mb-4">
              Artisan Coffee House
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting exceptional coffee experiences since 2020. Where passion meets perfection in every cup.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("location")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>123 Coffee Street</p>
              <p>Your City, State 12345</p>
              <p>(555) 123-BREW</p>
              <p>hello@artisancoffeehouse.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Artisan Coffee House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
