import { useState } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const categories = [
    "All",
    "Clothing",
    "Glasses",
    "Speakers",
    "Promotions",
    "Perfumes",
  ];

  const menuItems = [
    { title: "Categories", items: categories },
    { title: "Who We Are", href: "/who-we-are" },
    { title: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Store
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 bg-foreground transition-transform duration-300",
                isOpen && "rotate-45 translate-y-2"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-foreground transition-opacity duration-300",
                isOpen && "opacity-0"
              )} />
              <span className={cn(
                "w-full h-0.5 bg-foreground transition-transform duration-300",
                isOpen && "-rotate-45 -translate-y-2"
              )} />
            </div>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={false}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-6"
          >
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                {item.items ? (
                  <>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {item.items.map((subItem) => (
                        <motion.a
                          key={subItem}
                          href={`#${subItem.toLowerCase()}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {subItem}
                        </motion.a>
                      ))}
                    </div>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className="block text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={false}
            animate={{ y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-8 pt-6 border-t"
          >
            <div className="flex gap-4 justify-center mb-4">
              <motion.a
                href="#instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#whatsapp"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </motion.a>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">
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
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;