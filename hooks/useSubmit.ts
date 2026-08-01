import { useState } from "react";
import { registerUser, loginUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

export const useSubmit = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  return {
    error,
    setError,
    isLoading,
    setIsLoading,
    handleSubmit,
    isRegistering,
  };
};
