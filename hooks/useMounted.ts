import { useState, useEffect } from "react";

export const useMounted = (ind?: number, isExiting?: boolean) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setHasMounted(true);
      },
      (ind || 0) * 40,
    );
    return () => clearTimeout(timer);
  }, [ind]);

  let animationClasses = "opacity-0 translate-y-6 scale-[0.98]";
  if (hasMounted && !isExiting) {
    animationClasses = "opacity-100 translate-y-0 scale-100";
  } else if (isExiting) {
    animationClasses = "opacity-0 translate-y-6 scale-[0.98]";
  }

  const transitionDelay = isExiting ? "0ms" : `${(ind || 0) * 40}ms`;

  return { animationClasses, transitionDelay };
};
