import { useState } from "react";
export const useUpdateVenmo = () => {
  const [updateVenmoUrl, setUpdateVenmoUrl] = useState<boolean>(false);
  return {
    updateVenmoUrl,
    setUpdateVenmoUrl,
  };
};
