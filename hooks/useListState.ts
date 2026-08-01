import { useState } from "react";

export const useListState = (showComradeMeets: boolean = false) => {
  const [isComradeView, setIsComradeView] = useState(showComradeMeets);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [displayedView, setDisplayedView] = useState(showComradeMeets);

  const handleToggle = (newView: boolean) => {
    if (newView === isComradeView) return;
    setIsAnimatingOut(true); // Trigger exit animation
    setTimeout(() => {
      setIsComradeView(newView);
      setDisplayedView(newView);
      setIsAnimatingOut(false); // Trigger enter animation
    }, 300); // Match exit duration
  };
  return {
    isComradeView,
    displayedView,
    isAnimatingOut,
    handleToggle,
  };
};
