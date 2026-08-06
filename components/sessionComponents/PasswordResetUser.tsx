import { InputField } from "./InputField";
import { usePasswordReset } from "@/hooks/usePasswordReset";
export const PasswordResetUser = () => {
  const { handleSubmit, isLoading, error } = usePasswordReset();
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Username"
        type="text"
        name="username"
        placeholder="runner123"
      />

      <InputField
        label="New Password"
        type="password"
        name="password"
        placeholder="••••••••"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl bg-accent hover:opacity-90 active:scale-[0.98] px-4 py-3 font-semibold text-white transition shadow-sm mt-2 disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Reset"}
      </button>
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500 text-red-500 text-sm rounded-xl text-center font-medium">
          {error}
        </div>
      )}
      <div className="mt-6 text-center text-sm">
        <p className="text-content-muted">
          Mistake?{" "}
          <a href="/" className="text-accent font-semibold hover:underline">
            Go back
          </a>
        </p>
      </div>
    </form>
  );
};
