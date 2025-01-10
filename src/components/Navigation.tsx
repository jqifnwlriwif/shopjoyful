import { useState } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    { title: "Who We Are", href: "#about" },
    { title: "Contact Us", href: "#contact" },
  ];

  // Variantes de animación para las líneas del menú
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom: number) => ({
      rotate: custom,
      y: custom === 0 ? 8 : custom === 45 ? 0 : -8,
    }),
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold">Store</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-full transition-colors relative w-10 h-10"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              {[45, 0, -45].map((rotation, i) => (
                <motion.span
                  key={i}
                  custom={isOpen ? rotation : 0}
                  variants={lineVariants}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-foreground block mb-1.5 last:mb-0"
                />
              ))}
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
                  <motion.a
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.a>
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
              © 2024-{currentYear} All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;