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
    <div className="group relative overflow-hidden rounded-lg bg-background transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    </div>
  );
};

export default ProductCard;