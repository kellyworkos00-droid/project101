

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
      <header className="w-full flex items-center justify-between py-6 bg-white shadow-md border-b border-gray-100 px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/new_logo-removebg-preview.png"
            alt="Supacoat Logo"
            width={120}
            height={40}
            priority
          />
        </div>
        {/* Top nav removed. Floating bottom navbar added below. */}
      </header>
      <main className="flex flex-col items-center w-full max-w-4xl px-2 sm:px-4 py-6 sm:py-10">
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">Supacoat Merchants</h1>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Hardware Wholesale Partner</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-lg">
              Reliable hardware wholesale supply store in Ruiru – Kamakis. Quality products, fast service, and consistent supply — all under one roof.
            </p>
            <a href="#products" className="inline-block px-6 py-3 rounded-full bg-red-600 text-white font-bold text-lg shadow hover:bg-red-700 transition">Shop Now</a>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0 md:ml-8 flex-shrink-0">
            <ProductSlider products={products} />
          </div>
        </section>
        <section id="products" className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6 text-center">Our Products</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-0">
            {products.map((product) => (
              <a
                href={`/product/${product.id}`}
                className="card flex flex-col items-center justify-between p-2 sm:p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-100 hover:-translate-y-2 hover:scale-105 focus:outline-none min-h-[220px] w-full max-w-xs mx-auto overflow-hidden"
                style={{ textDecoration: 'none' }}
                aria-label={`View details for ${product.name}`}
              >
                <div className="w-full flex flex-col flex-1 items-center justify-between">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={90}
                    className="product-image mb-2 w-full h-auto object-cover rounded"
                  />
                  <h2 className="text-base sm:text-lg font-bold text-blue-700 mb-1 text-center truncate w-full">{product.name}</h2>
                  <p className="text-red-600 font-semibold mb-2 text-center text-sm sm:text-base truncate w-full">KES {product.price.toLocaleString()}</p>
                </div>
                <span
                  className="px-3 py-2 rounded-full bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow hover:bg-blue-800 transition mt-2 w-full text-center truncate"
                  style={{ pointerEvents: 'none' }}
                >
                  View Product
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    {/* Floating bottom navbar */}
    {/* Floating joined nav bar */}
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] bg-white border border-gray-200 shadow-lg rounded-full px-6 py-3 flex gap-8 items-center justify-center">
      <div className="relative group">
        <a href="#products" className="p-2 flex items-center justify-center rounded-full hover:bg-gray-100 transition" aria-label="Products">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#1f2937" d="M3 7V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1"/><rect width="18" height="13" x="3" y="7" fill="#e5e7eb" rx="2"/><path stroke="#1f2937" strokeWidth="2" d="M3 7V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1"/><rect width="18" height="13" x="3" y="7" stroke="#1f2937" strokeWidth="2" rx="2"/></svg>
        </a>
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-xs shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">Products</span>
      </div>
      <div className="relative group">
        <a href="#contact" className="p-2 flex items-center justify-center rounded-full hover:bg-gray-100 transition" aria-label="Contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#1f2937" d="M21 8.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5"/><path stroke="#1f2937" strokeWidth="2" d="M21 8.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5"/><path fill="#e5e7eb" d="M21 8.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5l9 5.5 9-5.5Z"/><path stroke="#1f2937" strokeWidth="2" d="m3 8.5 9 5.5 9-5.5"/></svg>
        </a>
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-xs shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">Contact</span>
      </div>
    </div>
  </div>
  );
}
