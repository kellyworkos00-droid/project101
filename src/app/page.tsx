

import Image from "next/image";
import ProductSlider, { Product } from "../components/ProductSlider";

export default function Home() {
  // Example product data
  const products: Product[] = [
    {
      id: "IMG-20250522-WA0085",
      name: "Product 1",
      image: "/IMG-20250522-WA0085.jpg",
      price: 1200,
    },
    {
      id: "IMG-20250522-WA0086",
      name: "Product 2",
      image: "/IMG-20250522-WA0086.jpg",
      price: 950,
    },
    {
      id: "IMG-20250522-WA0089",
      name: "Product 3",
      image: "/IMG-20250522-WA0089.jpg",
      price: 1800,
    },
    {
      id: "IMG-20250526-WA0032",
      name: "Product 4",
      image: "/IMG-20250526-WA0032.jpg",
      price: 2100,
    },
    {
      id: "IMG-20250526-WA0033",
      name: "Product 5",
      image: "/IMG-20250526-WA0033.jpg",
      price: 750,
    },
    {
      id: "IMG-20250527-WA0048",
      name: "Product 6",
      image: "/IMG-20250527-WA0048.jpg",
      price: 1600,
    },
    {
      id: "IMG-20250528-WA0056",
      name: "Product 7",
      image: "/IMG-20250528-WA0056.jpg",
      price: 1300,
    },
    {
      id: "IMG-20250530-WA0001",
      name: "Product 8",
      image: "/IMG-20250530-WA0001.jpg",
      price: 2000,
    },
    {
      id: "IMG-20250530-WA0004",
      name: "Product 9",
      image: "/IMG-20250530-WA0004.jpg",
      price: 1100,
    },
    {
      id: "IMG-20250530-WA0005",
      name: "Product 10",
      image: "/IMG-20250530-WA0005.jpg",
      price: 900,
    },
    {
      id: "IMG-20250530-WA0006",
      name: "Product 11",
      image: "/IMG-20250530-WA0006.jpg",
      price: 1700,
    },
    {
      id: "IMG-20250530-WA0008",
      name: "Product 12",
      image: "/IMG-20250530-WA0008.jpg",
      price: 1400,
    },
    {
      id: "IMG-20250530-WA0009",
      name: "Product 13",
      image: "/IMG-20250530-WA0009.jpg",
      price: 1250,
    },
    {
      id: "IMG-20250531-WA0029",
      name: "Product 14",
      image: "/IMG-20250531-WA0029.jpg",
      price: 1550,
    },
    {
      id: "IMG-20250531-WA0030",
      name: "Product 15",
      image: "/IMG-20250531-WA0030.jpg",
      price: 1350,
    },
    {
      id: "IMG-20250531-WA0031",
      name: "Product 16",
      image: "/IMG-20250531-WA0031.jpg",
      price: 1450,
    },
    {
      id: "IMG-20250531-WA0032",
      name: "Product 17",
      image: "/IMG-20250531-WA0032.jpg",
      price: 1150,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col items-center justify-start">
      <header className="w-full flex items-center justify-start py-6 bg-white shadow-md border-b border-gray-100 px-6">
        <Image
          src="/new_logo-removebg-preview.png"
          alt="Supacoat Logo"
          width={120}
          height={40}
          priority
        />
      </header>
      <main className="flex flex-col items-center w-full max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Welcome to Supacoat</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Discover premium products with a clean, mobile-friendly shopping experience.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="card flex flex-col items-center justify-between p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={120}
                className="rounded mb-2 object-cover"
              />
              <h2 className="text-lg font-bold text-blue-700 mb-1 text-center">{product.name}</h2>
              <p className="text-red-600 font-semibold mb-2 text-center">KES {product.price.toLocaleString()}</p>
              <a
                href={`/product/${product.id}`}
                className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold text-sm shadow hover:bg-blue-800 transition"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
