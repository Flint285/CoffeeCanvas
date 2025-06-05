import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Promo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/promos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      toast({
        title: "Thanks for signing up!",
        description: "We'll keep you posted on special promotions.",
      });
      setName("");
      setEmail("");
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-coffee-brown text-white">
      <header className="p-6">
        <Link href="/" className="text-warm-cream hover:underline">
          &larr; Back to Home
        </Link>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-md w-full">
          <h1 className="font-playfair text-4xl font-bold mb-4 text-center">
            Join Our Coffee Lovers List
          </h1>
          <p className="mb-6 text-center text-warm-cream">
            Sign up for updates on new blends and exclusive promotions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder-warm-cream focus:ring-soft-mocha"
              required
            />
            <Input
              type="email"
              placeholder="Email address"
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
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
