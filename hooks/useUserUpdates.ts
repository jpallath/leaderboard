import { resetUserPassword } from "@/actions/users";
import { useTransition } from "react";

export const useUserUpdates = (id?: number | null) => {
  const [isPending, startTransition] = useTransition();
  const resetPassword = async (id: number) => {
    startTransition(async () => {
      await resetUserPassword(id);
    });
  };
  return { isPending, resetPassword };
};
