import { useState } from "react";

export const useUserFunctions = (initialId?: number | null) => {
  const [activeId, setActiveId] = useState<number | null>(initialId ?? null);
  const userFunction = (id: number) => {
    setActiveId(id);
  };
  return {
    activeId,
    userFunction,
  };
};
