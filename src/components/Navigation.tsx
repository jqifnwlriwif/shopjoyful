import { useState } from "react";
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold">Store</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-0" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b transform transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                {item.items ? (
                  <>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href={`#${subItem.toLowerCase()}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex gap-4 justify-center mb-4">
              <a
                href="#instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#whatsapp"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © 2024-{currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;