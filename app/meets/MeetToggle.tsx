"use client";

type MeetToggleProps = {
  isComradeView: boolean;
  setIsComradeView: (value: boolean) => void;
};

export default function MeetToggle({
  isComradeView,
  setIsComradeView,
}: MeetToggleProps) {
  return (
    <div className="fixed top-18 left-1/2 -translate-x-1/2 flex items-center bg-gray-100 p-1 rounded-full z-10 w-48 shadow-sm">
      {/* 
        Sliding Red Pill Background:
        - Uses translate-x to slide smoothly back and forth.
        - duration-300 creates the gliding animation speed.
      */}
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-red-500 rounded-full transition-transform duration-300 ease-in-out ${
          isComradeView ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
        }`}
      />

      {/* "All Meets" Tab */}
      <span
        onClick={() => setIsComradeView(false)}
        className={`relative z-10 flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer select-none transition-colors duration-300 active:scale-95 ${
          !isComradeView ? "text-white" : "text-gray-600 hover:text-black"
        }`}
      >
        All Meets
      </span>

      {/* "My Meets" Tab */}
      <span
        onClick={() => setIsComradeView(true)}
        className={`relative z-10 flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer select-none transition-colors duration-300 active:scale-95 ${
          isComradeView ? "text-white" : "text-gray-600 hover:text-black"
        }`}
      >
        My Meets
      </span>
    </div>
  );
}
