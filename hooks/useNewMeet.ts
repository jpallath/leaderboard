import { useState, useActionState } from "react";
import { newMeet } from "@/actions/meets";
import { CurrentUserWithoutMeetsProps } from "@/app/types";

export const useNewMeet = (currentUser: CurrentUserWithoutMeetsProps) => {
  const [locationValue, setLocationValue] = useState("prospect-morning");
  const newMeetWithId = newMeet.bind(null, currentUser.id);
  const [state, formAction, isPending] = useActionState(newMeetWithId, null);
  const today = new Date().toISOString().split("T")[0];
  const defaultMeetName = `${today} Run`;
  return {
    locationValue,
    setLocationValue,
    formAction,
    today,
    defaultMeetName,
  };
};
