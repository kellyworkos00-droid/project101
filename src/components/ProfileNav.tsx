"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProfileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const isLoggedIn = typeof window !== "undefined" && window.sessionStorage.getItem("user_email");

  function handleLogin() {
    // Redirect to Google OAuth (placeholder, implement next)
    router.push("/auth/google");
  }

  function handleLogout() {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("user_email");
      window.sessionStorage.removeItem("user_name");
    }
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:bg-gray-100 transition flex items-center"
        aria-label="Profile"
        onClick={() => setShowMenu((v) => !v)}
      >
        <Image src="/profile-icon.svg" alt="Profile" width={32} height={32} />
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          {isLoggedIn ? (
            <>
              <div className="px-4 py-2 text-gray-700">Logged in as <b>{window.sessionStorage.getItem("user_email")}</b></div>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={handleLogout}>Logout</button>
              {window.sessionStorage.getItem("user_email") === "supacoatinvestmentltd@gmail.com" && (
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => router.push("/admin/panel")}>Admin Panel</button>
              )}
            </>
          ) : (
            <>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={handleLogin}>Login / Create Account</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
