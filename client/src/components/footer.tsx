export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-coffee-brown text-warm-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-playfair text-3xl font-bold text-white mb-6">
              Artisan Coffee House
            </h3>
            <p className="text-base leading-relaxed text-gray-300">
              Crafting exceptional coffee experiences since 2020. Where passion meets perfection in every cup.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-base"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("location")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-base"
                >
                  Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 text-base text-gray-300">
              <p className="leading-relaxed">123 Coffee Street<br />Your City, State 12345</p>
              <p>(555) 123-BREW</p>
              <p className="break-words">hello@artisancoffeehouse.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-soft-mocha/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Artisan Coffee House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
