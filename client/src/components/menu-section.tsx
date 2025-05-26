import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { coffeeItems, pastryItems } from "@/lib/menu-data";

export default function MenuSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddItem = (itemId: string) => {
    setAddedItems(prev => new Set(prev).add(itemId));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-5xl font-bold text-coffee-brown mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully curated selections featuring single-origin coffees and artisanal pastries
          </p>
        </motion.div>

        {/* Coffee Menu */}
        <div className="mb-16">
          <motion.h3 
            className="font-playfair text-3xl font-bold text-coffee-brown mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Signature Coffees
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <Card className="menu-item bg-warm-cream rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover rounded-lg mb-4" 
                    />
                    <h4 className="font-playfair text-xl font-semibold text-coffee-brown mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-coffee-brown font-semibold">
                        {item.price}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddItem(item.id)}
                        className={`text-soft-mocha hover:text-coffee-brown transition-colors ${
                          addedItems.has(item.id) ? 'text-green-600' : ''
                        }`}
                      >
                        {addedItems.has(item.id) ? <Check size={16} /> : <Plus size={16} />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Food Menu */}
        <div>
          <motion.h3 
            className="font-playfair text-3xl font-bold text-coffee-brown mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Artisanal Pastries & Light Bites
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <Card className="menu-item bg-warm-cream rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-32 object-cover rounded-lg mb-4" 
                    />
                    <h4 className="font-playfair text-lg font-semibold text-coffee-brown mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <span className="text-coffee-brown font-semibold">
                      {item.price}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
