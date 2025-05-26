import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our latest updates and special offers.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-coffee-brown text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-5xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-warm-cream">
            Follow us for updates on new blends, events, and special offers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-bold mb-6">Get in Touch</h3>
            <p className="text-lg mb-8 text-warm-cream">
              Have questions about our coffee, catering services, or want to host an event? We'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-soft-mocha" size={20} />
                <span className="text-warm-cream">hello@artisancoffeehouse.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-soft-mocha" size={20} />
                <span className="text-warm-cream">(555) 123-BREW</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-soft-mocha">Follow Us</h4>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-soft-mocha hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-soft-mocha hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-soft-mocha hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold mb-6">Newsletter Signup</h3>
                <p className="text-warm-cream mb-6">
                  Be the first to know about new coffee arrivals, exclusive events, and special promotions.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-warm-cream focus:ring-soft-mocha"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-soft-mocha text-coffee-brown hover:bg-opacity-90 transition-all font-semibold"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
