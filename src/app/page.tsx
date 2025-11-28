
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col items-center justify-start">
      <header className="w-full flex items-center justify-center py-6 bg-blue-700 shadow-md">
        <Image
          src="/new_logo-removebg-preview.png"
          alt="Supacoat Logo"
          width={120}
          height={40}
          priority
        />
      </header>
      <main className="flex flex-col items-center w-full max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Welcome to Supacoat</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Discover premium products with a clean, mobile-friendly shopping experience.
        </p>
        <div className="w-full flex flex-col gap-6 items-center">
          {/* Example product slider placeholder */}
          <div className="w-full max-w-lg overflow-x-auto whitespace-nowrap py-4">
            <div className="inline-block w-64 h-40 bg-blue-100 rounded-lg shadow mr-4 align-top border-4 border-red-500"></div>
            <div className="inline-block w-64 h-40 bg-blue-100 rounded-lg shadow mr-4 align-top border-4 border-red-500"></div>
            <div className="inline-block w-64 h-40 bg-blue-100 rounded-lg shadow align-top border-4 border-red-500"></div>
          </div>
          <a
            href="#shop"
            className="mt-6 px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-lg shadow hover:bg-red-700 transition"
          >
            Shop Now
          </a>
        </div>
      </main>
    </div>
      </main>
    </div>
  );
}
