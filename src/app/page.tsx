

import Image from "next/image";
import ProductSlider, { Product } from "../components/ProductSlider";

export default function Home() {
  // Example product data
  const products: Product[] = [
    {
      id: "1",
      name: "Supacoat Classic",
      image: "/file.svg",
      price: 29.99,
    },
    {
      id: "2",
      name: "Supacoat Premium",
      image: "/globe.svg",
      price: 49.99,
    },
    {
      id: "3",
      name: "Supacoat Ultra",
      image: "/window.svg",
      price: 69.99,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col items-center justify-start">
      <header className="w-full flex items-center justify-center py-6 bg-white shadow-md border-b border-gray-100">
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
        <div className="w-full flex flex-col gap-6 items-center">
          <ProductSlider products={products} />
          <a
            href="#shop"
            className="mt-6 px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-lg shadow hover:bg-red-700 transition"
          >
            Shop Now
          </a>
        </div>
      </main>
    </div>
  );
}
