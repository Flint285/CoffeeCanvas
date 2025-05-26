import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-warm-cream" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Coffee roasting process" 
              className="rounded-lg shadow-lg w-full" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-coffee-brown mb-6">
              Our Story
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Founded in 2020, Artisan Coffee House represents a commitment to excellence in every aspect of the coffee experience. From sourcing the finest beans to perfecting our roasting techniques, we create moments of pure coffee bliss.
            </p>
            <p className="text-lg leading-relaxed">
              Our passion for quality drives us to work directly with farmers, ensuring sustainable practices and fair compensation while delivering exceptional flavors to your cup.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
