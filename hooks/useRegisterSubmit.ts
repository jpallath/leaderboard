import { useState } from "react";
import { registerUser, loginUser } from "@/actions/auth";
import { useRouter, useSearchParams } from "next/navigation";

export const useRegisterSubmit = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // Directly read search params reactively on the client
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const isPasswordReset = mode === "passwordReset";
  const isRegistering = mode === "register";

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

  return {
    error,
    setError,
    isLoading,
    setIsLoading,
    handleSubmit,
    isRegistering,
    isPasswordReset,
  };
};
