import { useState } from "react";

export const useAnimation = () => {
  const [animation, setAnimation] = useState(false);

  return {
    animation,
    setAnimation,
  };
};
