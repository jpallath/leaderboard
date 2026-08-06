"use client";

import { useRegisterSubmit } from "@/hooks/useRegisterSubmit";
import { InputField } from "./InputField";
import { PasswordResetUser } from "./PasswordResetUser";

export const RegisterSigninUser = () => {
  const { error, isLoading, handleSubmit, isRegistering, isPasswordReset } =
    useRegisterSubmit();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-content">
      <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border p-8 shadow-xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black tracking-tight">
            DSA Running Club <span className="text-accent">Leaderboard</span>
          </h1>
          <p className="text-sm text-content-muted mt-2">
            {isPasswordReset
              ? "Reset your account password"
              : isRegistering
                ? "Create an account to join comrades"
                : "Sign in to track your run stats"}
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 text-sm rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        {/* Form / Content View */}
        {isPasswordReset ? (
          <PasswordResetUser />
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegistering && (
                <InputField
                  label="Name / Alias"
                  type="text"
                  name="name"
                  placeholder="Comrade Runner"
                />
              )}

              <InputField
                label="Username"
                type="text"
                name="username"
                placeholder="runner123"
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
              />

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

              <p className="text-center text-sm pt-2">
                Did the admin reset your password?{" "}
                <a
                  href="/?mode=passwordReset"
                  className="text-accent font-semibold hover:underline"
                >
                  Click here
                </a>
              </p>
            </form>

            {/* Toggle Footer */}
            <div className="mt-6 text-center text-sm">
              {isRegistering ? (
                <p className="text-content-muted">
                  Already have an account?{" "}
                  <a
                    href="/"
                    className="text-accent font-semibold hover:underline"
                  >
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
          </>
        )}
      </div>
    </main>
  );
};
