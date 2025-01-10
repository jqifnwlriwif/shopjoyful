import { memo } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background/80 backdrop-blur-md border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <motion.a
              href="#instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#facebook"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#whatsapp"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Hecho por{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              lovable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;