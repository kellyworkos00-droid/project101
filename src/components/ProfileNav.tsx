"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/form.css";

export default function ProfileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const isLoggedIn = typeof window !== "undefined" && window.sessionStorage.getItem("user_email");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);


  // Show login/signup form in popout
  function handleLogin() {
    setShowMenu(true);
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
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-60">
          {isLoggedIn ? (
            <div className="form-container relative" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.35)', minWidth: 340, maxWidth: 400, width: '100%'}}> 
              <button className="absolute top-2 right-2 text-white text-xl" onClick={() => setShowMenu(false)} aria-label="Close">&times;</button>
              <div className="title">Profile</div>
              <div className="input-group">Logged in as <b>{window.sessionStorage.getItem("user_email")}</b></div>
              <button className="sign mt-4" onClick={handleLogout}>Logout</button>
              {window.sessionStorage.getItem("user_email") === "supacoatinvestmentltd@gmail.com" && (
                <button className="sign mt-2" onClick={() => router.push("/admin/panel")}>Admin Panel</button>
              )}
            </div>
          ) : (
            <div className="form-container">
              <div className="title">Login / Create Account</div>
              <form className="form" onSubmit={e => {
                e.preventDefault();
                const email = (e.target as any).email.value;
                window.sessionStorage.setItem("user_email", email);
                setShowMenu(false);
                router.refresh();
              }}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <button type="submit" className="sign mt-4">Continue</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
