import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "supacoatinvestmentltd@gmail.com";
const ADMIN_PASSWORD = "q123456789P";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("admin_email", email);
        window.sessionStorage.setItem("admin_password", password);
      }
      router.push("/admin/panel");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border rounded px-4 py-2 w-full"
          required
        />
        {error && <div className="text-red-600 text-center">{error}</div>}
        <button type="submit" className="bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-800 transition">Login</button>
      </form>
    </div>
  );
}
