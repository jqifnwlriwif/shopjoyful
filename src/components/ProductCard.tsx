import { memo } from "react";
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

const ProductCard = memo(({
  image,
  name,
  type,
  price,
  primaryColor = "text-primary",
  secondaryColor = "text-muted-foreground",
}: ProductCardProps) => {
  const cardVariants = {
    hover: { 
      scale: 1.05,
      rotateY: 5,
      z: 50 
    }
  };

  const imageVariants = {
    hover: { scale: 1.1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
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
          variants={imageVariants}
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className={cn("font-medium line-clamp-1", primaryColor)}>{name}</h3>
        <p className={cn("text-sm line-clamp-1", secondaryColor)}>{type}</p>
        <p className={cn("font-semibold", primaryColor)}>
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;