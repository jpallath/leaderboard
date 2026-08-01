import { useState } from "react";
import { updateUserAndMeetWithVenmoDetails } from "@/actions/userMeets";

export const useVenmoState = (
  userId: number,
  meetId: number,
  onSuccess: () => void,
) => {
  const [venmoUrl, setVenmoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateVenmo = async () => {
    if (!venmoUrl.trim()) return;
    setIsLoading(true);
    try {
      await updateUserAndMeetWithVenmoDetails(venmoUrl, userId, meetId);
      onSuccess(); // Tell the component to flip the view back
    } catch (error) {
      console.error("Failed to update Venmo", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { venmoUrl, setVenmoUrl, updateVenmo, isLoading };
};
