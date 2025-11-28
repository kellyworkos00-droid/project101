"use client";
import React, { useEffect, useRef } from "react";
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
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let scrollAmount = 0;
    const cardWidth = 272; // w-64 + mr-4 (256px + 16px)
    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
      } else {
        scrollAmount += cardWidth;
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div ref={sliderRef} className="w-full max-w-lg overflow-x-auto whitespace-nowrap py-4 scrollbar-hide">
      {products.map((product) => (
        <div
          key={product.id}
          className="inline-block w-64 h-80 bg-white rounded-lg shadow mr-4 align-top border-4 border-red-500 p-4"
        >
          <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-2 rounded bg-white">
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-lg font-bold text-blue-700 mb-1">{product.name}</h2>
          <p className="text-red-600 font-semibold mb-2">KES {product.price.toLocaleString()}</p>
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
