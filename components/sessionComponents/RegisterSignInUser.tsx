"use client";

import { useState } from "react";
import { registerUser, loginUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

export const RegisterSigninUser = ({
  searchParams,
}: {
  searchParams: { mode?: string } | Promise<{ mode?: string }>;
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isRegistering =
    typeof window !== "undefined" &&
    window.location.search.includes("mode=register");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const res = isRegistering
        ? await registerUser(formData)
        : await loginUser(formData);

      if (res?.error) {
        setError(res.error);
        setIsLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-content">
      <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black tracking-tight">
            DSA Running Club <span className="text-accent">Leaderboard</span>
          </h1>
          <p className="text-sm text-content-muted mt-2">
            {isRegistering
              ? "Create an account to join comrades"
              : "Sign in to track your run stats"}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 text-sm rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1">
                Name / Alias
              </label>
              <input
                type="text"
                name="name"
                placeholder="Comrade Runner"
                required
                className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="runner123"
              required
              className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-accent hover:opacity-90 active:scale-[0.98] px-4 py-3 font-semibold text-white transition shadow-sm mt-2 disabled:opacity-50"
          >
            {isLoading
              ? "Processing..."
              : isRegistering
                ? "Create Account"
                : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {isRegistering ? (
            <p className="text-content-muted">
              Already have an account?{" "}
              <a href="/" className="text-accent font-semibold hover:underline">
                Sign In
              </a>
            </p>
          ) : (
            <p className="text-content-muted">
              Don&apos;t have an account?{" "}
              <a
                href="/?mode=register"
                className="text-accent font-semibold hover:underline"
              >
                Register
              </a>
            </p>
          )}
        </div>
      </div>
    </main>
  );
};
