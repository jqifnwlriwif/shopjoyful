import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";

// TODO: Reemplazar con llamada a API real
const fetchProducts = async () => {
  // Ejemplo de cómo se estructuraría la llamada a la API
  // const response = await fetch('tu-api/products');
  // const data = await response.json();
  // return data;
  
  return [
    {
      id: 1,
      name: "Premium Laptop",
      type: "Electronics",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "All",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      type: "Speakers",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Speakers",
    },
  ];
};

const categories = ["All", "Clothing", "Glasses", "Speakers", "Promotions", "Perfumes"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      Loading...
    </div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              type={product.type}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;