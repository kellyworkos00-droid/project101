import React from "react";
import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  return (
    <div className="w-full max-w-lg overflow-x-auto whitespace-nowrap py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="inline-block w-64 h-80 bg-blue-100 rounded-lg shadow mr-4 align-top border-4 border-red-500 p-4"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={120}
            className="rounded mb-2 object-cover"
          />
          <h2 className="text-lg font-bold text-blue-700 mb-1">{product.name}</h2>
          <p className="text-red-600 font-semibold mb-2">${product.price.toFixed(2)}</p>
          <a
            href={`/product/${product.id}`}
            className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold text-sm shadow hover:bg-blue-800 transition"
          >
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
