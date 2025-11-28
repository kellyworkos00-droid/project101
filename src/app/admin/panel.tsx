import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Simple client-side auth check
const ADMIN_EMAIL = "supacoatinvestmentltd@gmail.com";
const ADMIN_PASSWORD = "q123456789P";

function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return (
    window.sessionStorage.getItem("admin_email") === ADMIN_EMAIL &&
    window.sessionStorage.getItem("admin_password") === ADMIN_PASSWORD
  );
}

export default function AdminPanel() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/admin/login");
    }
  }, [router]);

  // Placeholder for product management and orders
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="bg-white rounded shadow p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Product Management</h2>
        <p className="mb-4">Add, edit, or delete products here.</p>
        {/* Product CRUD UI goes here */}
        <hr className="my-6" />
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        <p>View customer orders here.</p>
        {/* Orders UI goes here */}
      </div>
    </div>
  );
}
