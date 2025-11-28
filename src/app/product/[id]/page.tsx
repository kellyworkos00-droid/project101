import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    id: "1",
    name: "Supacoat Classic",
    image: "/file.svg",
    price: 29.99,
    description: "A classic protective coat for everyday use. Durable and stylish.",
  },
  {
    id: "2",
    name: "Supacoat Premium",
    image: "/globe.svg",
    price: 49.99,
    description: "Premium protection with advanced features for demanding environments.",
  },
  {
    id: "3",
    name: "Supacoat Ultra",
    image: "/window.svg",
    price: 69.99,
    description: "Ultra protection for extreme conditions. Maximum durability and comfort.",
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-xl bg-blue-50 rounded-lg shadow p-6 flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={240}
          height={160}
          className="rounded mb-4 object-cover border-4 border-red-500"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">{product.name}</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">{product.description}</p>
        <div className="text-2xl font-semibold text-red-600 mb-6">${product.price.toFixed(2)}</div>
        <button className="px-8 py-3 rounded-full bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
