import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

const products = [
  {
    id: "IMG-20250522-WA0085",
    name: "Product 1",
    image: "/IMG-20250522-WA0085.jpg",
    price: 1200,
    description: "High-quality Supacoat product for all your needs.",
  },
  {
    id: "IMG-20250522-WA0086",
    name: "Product 2",
    image: "/IMG-20250522-WA0086.jpg",
    price: 950,
    description: "Reliable and affordable Supacoat solution.",
  },
  // ...add more products as needed
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
        <div className="text-2xl font-semibold text-red-600 mb-6">KES {product.price.toLocaleString()}</div>
        <a
          href={`https://wa.me/254702771771?text=I'm interested in ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-green-500 text-white font-bold text-lg shadow hover:bg-green-600 transition"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
