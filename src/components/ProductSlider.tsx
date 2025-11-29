"use client";
import React, { useRef, useEffect } from "react";
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
    const cardWidth = slider.firstChild instanceof HTMLElement ? slider.firstChild.offsetWidth + 24 : 240; // 24px gap
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
  }, [products.length]);

  return (
    <div ref={sliderRef} className="w-full overflow-x-auto flex gap-6 py-4 scrollbar-hide">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-72 sm:w-64 h-80 bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col items-center justify-between"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={140}
            className="rounded-xl mb-2 object-cover w-full h-36"
          />
          <h2 className="text-lg font-bold text-blue-700 mb-1 text-center">{product.name}</h2>
          <p className="text-red-600 font-semibold mb-2 text-center">KES {product.price.toLocaleString()}</p>
          <a
            href={`/product/${product.id}`}
            className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold text-sm shadow hover:bg-blue-800 transition mt-2"
          >
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
