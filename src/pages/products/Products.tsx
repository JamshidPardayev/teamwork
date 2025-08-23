import React, { useEffect, useState } from "react";
import { api } from "../../api";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      });
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h1 className="text-5xl font-semibold text-center my-3">Products</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
        {products?.map((product) => (
          <div key={product?.id} className="border rounded-[6px] p-2">
            <div className="w-full h-[280px]">
              <img src={product?.thumbnail} alt="img" className="hover:scale-105 duration-300 cursor-pointer"/>
            </div>
            <h2 className="line-clamp-1 text-[25px] font-medium">{product?.title}</h2>
            <h3 className="text-xl capitalize">{product?.category}</h3>
            <p className="line-clamp-3 text-gray-700">{product?.description}</p>
            <strong className="text-green-700">${product?.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
