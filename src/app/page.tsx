

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
      <header className="fixed top-0 left-0 w-full flex items-center justify-between py-4 bg-white shadow-lg border-b border-gray-100 px-6 z-50 backdrop-blur-md">
        {/* Logo only, no name or nav links */}
        <div className="flex items-center gap-3">
          <Image
            src="/new_logo-removebg-preview.png"
            alt="Supacoat Logo"
            width={120}
            height={40}
            priority
          />
        </div>
      </header>
      {/* Floating nav bar at bottom center, outside header */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 px-6 py-3 bg-white rounded-full shadow-2xl flex gap-8 items-center z-50 border border-gray-200">
        <div className="group relative flex flex-col items-center">
          <a href="#products" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition border border-gray-300">
            {/* Product icon (box) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <rect x="4" y="7" width="16" height="10" rx="2" fill="black" />
              <path stroke="black" strokeWidth="1.5" d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">Products</span>
        </div>
        {/* WhatsApp icon button */}
        <div className="group relative flex flex-col items-center">
          <a href="https://wa.me/254702771771" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition border border-gray-300">
            {/* WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <circle cx="16" cy="16" r="16" fill="black" />
              <path d="M22.5 19.5C21.8333 19.5 21.1667 19.3333 20.5 19C20.3333 18.9167 20.0833 18.9167 19.9167 19.0833L18.5 20.0833C16.5 19.0833 14.9167 17.5 13.9167 15.5L14.9167 14.0833C15.0833 13.9167 15.0833 13.6667 15 13.5C14.6667 12.8333 14.5 12.1667 14.5 11.5C14.5 11.0833 14.1667 10.8333 13.8333 10.8333H11.5C11.1667 10.8333 10.8333 11.0833 10.8333 11.5C10.8333 17.0833 15.4167 21.6667 21 21.6667C21.4167 21.6667 21.6667 21.3333 21.6667 21V18.6667C21.6667 18.3333 21.4167 18 21 18C20.8333 18 20.6667 18.0833 20.5 18.1667C20.3333 18.25 20.1667 18.3333 20 18.4167C19.8333 18.5 19.6667 18.5833 19.5 18.6667C19.3333 18.75 19.1667 18.8333 19 18.9167C18.8333 19 18.6667 19.0833 18.5 19.1667C18.3333 19.25 18.1667 19.3333 18 19.4167C17.8333 19.5 17.6667 19.5833 17.5 19.6667C17.3333 19.75 17.1667 19.8333 17 19.9167C16.8333 20 16.6667 20.0833 16.5 20.1667C16.3333 20.25 16.1667 20.3333 16 20.4167C15.8333 20.5 15.6667 20.5833 15.5 20.6667C15.3333 20.75 15.1667 20.8333 15 20.9167C14.8333 21 14.6667 21.0833 14.5 21.1667C14.3333 21.25 14.1667 21.3333 14 21.4167C13.8333 21.5 13.6667 21.5833 13.5 21.6667C13.3333 21.75 13.1667 21.8333 13 21.9167C12.8333 22 12.6667 22.0833 12.5 22.1667C12.3333 22.25 12.1667 22.3333 12 22.4167C11.8333 22.5 11.6667 22.5833 11.5 22.6667C11.3333 22.75 11.1667 22.8333 11 22.9167C10.8333 23 10.6667 23.0833 10.5 23.1667C10.3333 23.25 10.1667 23.3333 10 23.4167C9.83333 23.5 9.66667 23.5833 9.5 23.6667C9.33333 23.75 9.16667 23.8333 9 23.9167C8.83333 24 8.66667 24.0833 8.5 24.1667C8.33333 24.25 8.16667 24.3333 8 24.4167C7.83333 24.5 7.66667 24.5833 7.5 24.6667C7.33333 24.75 7.16667 24.8333 7 24.9167C6.83333 25 6.66667 25.0833 6.5 25.1667C6.33333 25.25 6.16667 25.3333 6 25.4167C5.83333 25.5 5.66667 25.5833 5.5 25.6667C5.33333 25.75 5.16667 25.8333 5 25.9167C4.83333 26 4.66667 26.0833 4.5 26.1667C4.33333 26.25 4.16667 26.3333 4 26.4167C3.83333 26.5 3.66667 26.5833 3.5 26.6667C3.33333 26.75 3.16667 26.8333 3 26.9167C2.83333 27 2.66667 27.0833 2.5 27.1667C2.33333 27.25 2.16667 27.3333 2 27.4167C1.83333 27.5 1.66667 27.5833 1.5 27.6667C1.33333 27.75 1.16667 27.8333 1 27.9167C0.833333 28 0.666667 28.0833 0.5 28.1667C0.333333 28.25 0.166667 28.3333 0 28.4167" fill="#fff"/>
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-green-700 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">WhatsApp</span>
        </div>
        <div className="group relative flex flex-col items-center">
          <a href="#contact" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition border border-gray-300">
            {/* Contact icon (phone) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <path stroke="black" strokeWidth="1.5" d="M2 6.5A3.5 3.5 0 0 1 5.5 3h13A3.5 3.5 0 0 1 22 6.5v11A3.5 3.5 0 0 1 18.5 21h-13A3.5 3.5 0 0 1 2 17.5v-11Z" />
              <path stroke="black" strokeWidth="1.5" d="M6 8h12M6 12h8" />
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">Contact</span>
        </div>
      </div>
      <main className="flex flex-col items-center w-full max-w-4xl px-4 pt-24 pb-10">
        <section className="w-full flex flex-col items-center justify-center gap-8 mb-10">
          <div className="w-full text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 leading-tight">Welcome to Supacoat</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg mx-auto">
              Discover premium products for a cleaner, brighter future. Shop with confidence and enjoy a seamless, mobile-friendly experience.
            </p>
            <a href="#products" className="inline-block px-6 py-3 rounded-full bg-red-600 text-white font-bold text-lg shadow hover:bg-red-700 transition">Shop Now</a>
          </div>
          {/* Product slider in hero section */}
          <div className="w-full max-w-6xl mx-auto">
            <ProductSlider products={products} />
          </div>
        </section>
        <section id="products" className="w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Products</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="flex flex-col items-center justify-between p-4 bg-white rounded-xl shadow-lg border border-gray-200 min-h-[320px] w-full hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition focus:outline-none"
                style={{ textDecoration: 'none' }}
                aria-label={`View details for ${product.name}`}
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
                <span
                  className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold text-sm shadow hover:bg-blue-800 transition mt-2"
                  style={{ pointerEvents: 'none' }}
                >
                  View Product
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
