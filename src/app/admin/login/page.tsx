"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="glass-panel glow-border max-w-md w-full p-8 space-y-6">
        <h1 className="text-2xl font-display font-semibold text-foreground">Admin Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your admin password to access contact messages.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-heading tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-3 bg-transparent border-b border-border/50 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 text-sm font-heading tracking-[0.2em] uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

