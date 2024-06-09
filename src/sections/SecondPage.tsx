import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const SecondPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(`http://localhost:5000/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  //   const randomIndex = Math.floor(Math.random() * (products.length - 3));

  return (
    <div className="flex flex-col justify-center text-black h-screen w-screen bg-yellow-500">
      <h2 className="text-5xl font-heavitas ml-20 ">New Arrivals</h2>
      {products.length > 0 ? (
        // products.slice(randomIndex, randomIndex + 4).map((product) => (
        <div className="flex justify-center items-center gap-10 p-20">
          <Card
            key={products[19].id}
            item={products[19].title}
            image={products[19].image}
          />
          <Card
            key={products[15].id}
            item={products[15].title}
            image={products[15].image}
          />
          <Card
            key={products[2].id}
            item={products[2].title}
            image={products[2].image}
          />
          <Card
            key={products[6].id}
            item={products[6].title}
            image={products[6].image}
          />
        </div>
      ) : (
        // ))
        <div>No products available</div>
      )}
    </div>
  );
};

export default SecondPage;
