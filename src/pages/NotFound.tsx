import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg"
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-display text-8xl text-primary mb-4">404</h1>
          <h2 className="font-display text-3xl text-foreground tracking-wider mb-4">
            TRAIL NOT FOUND
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Looks like you've ventured off the beaten path. Let's get you back
            on track.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
