import { updateResetPassword } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const usePasswordReset = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const res = await updateResetPassword(formData);

      if (res?.error) {
        setError(res?.error);
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
  return { error, isLoading, handleSubmit };
};
