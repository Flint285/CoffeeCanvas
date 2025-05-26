import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function LocationSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="location" className="py-20 bg-warm-cream" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-5xl font-bold text-coffee-brown mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">
            Find us in the heart of downtown, where great coffee meets community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white rounded-lg shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-6">
                  Store Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-coffee-brown text-xl mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-coffee-brown mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Coffee Street<br />
                        Downtown District<br />
                        Your City, State 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-coffee-brown text-xl mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-coffee-brown mb-1">Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                        <p>Saturday: 7:00 AM - 9:00 PM</p>
                        <p>Sunday: 7:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-coffee-brown text-xl mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-coffee-brown mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-BREW</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Coffee shop exterior" 
              className="w-full rounded-lg shadow-lg" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
