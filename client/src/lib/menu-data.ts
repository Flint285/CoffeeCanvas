export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const coffeeItems: MenuItem[] = [
  {
    id: "signature-espresso",
    name: "Signature Espresso",
    description: "Rich, full-bodied espresso with notes of dark chocolate and caramel",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "artisan-cappuccino",
    name: "Artisan Cappuccino",
    description: "Perfectly balanced espresso with steamed milk and artistic foam",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Smooth, low-acid coffee brewed for 12 hours for maximum flavor",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    description: "Creamy espresso drink with Madagascar vanilla and steamed milk",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "signature-mocha",
    name: "Signature Mocha",
    description: "Rich espresso blended with Belgian chocolate and topped with cream",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "pour-over",
    name: "Single Origin Pour Over",
    description: "Meticulously crafted with rotating selection of premium beans",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export const pastryItems: MenuItem[] = [
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description: "Flaky, buttery pastry baked fresh daily",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1555507036-ab794f4df04a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    description: "House-made with organic blueberries",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Sourdough with avocado, sea salt, and microgreens",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "french-macarons",
    name: "French Macarons",
    description: "Delicate almond cookies in seasonal flavors",
    price: "$2.75",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];
