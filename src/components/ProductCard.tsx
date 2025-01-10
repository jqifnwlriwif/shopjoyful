import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  name: string;
  type: string;
  price: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const ProductCard = ({
  image,
  name,
  type,
  price,
  primaryColor = "text-primary",
  secondaryColor = "text-muted-foreground",
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50 
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="group relative overflow-hidden rounded-lg bg-background transition-all hover:shadow-lg perspective-1000"
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </div>
      <motion.div 
        className="p-4 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className={cn("font-medium line-clamp-1", primaryColor)}>{name}</h3>
        <p className={cn("text-sm line-clamp-1", secondaryColor)}>{type}</p>
        <p className={cn("font-semibold", primaryColor)}>
          ${price.toFixed(2)}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;