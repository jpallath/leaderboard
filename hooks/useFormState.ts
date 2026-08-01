import { useState } from "react";

export const useFormState = (
  action: (
    formData: FormData,
  ) => Promise<{ error?: string; success?: string } | void>,
) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => setVisible((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setError(null);
    setSuccess(null);
    setIsLoading(true);
    try {
      const formData = new FormData(formElement);
      const res = await action(formData);

      if (res?.error) {
        setError(res.error);
      } else if (res?.success) {
        setSuccess(res.success);
        formElement.reset();
      }
    } catch (err) {
      console.error("error at useFormState handleSubmit, ", err);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    error,
    success,
    visible,
    isLoading,
    toggleForm,
    handleSubmit,
  };
};
