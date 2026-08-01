"use client";
import { MeetProps } from "../types";
import MeetToggle from "./MeetToggle";
import { MeetLink } from "./MeetLink";
import { useListState } from "@/hooks/useListState";

type MeetsListComponentProps = {
  allMeets: MeetProps[];
  comradeMeets: MeetProps[];
  showComradeMeets: boolean;
};

export const MeetsListComponent = ({
  allMeets,
  comradeMeets,
  showComradeMeets = false,
}: MeetsListComponentProps) => {
  const { isComradeView, displayedView, isAnimatingOut, handleToggle } =
    useListState();

  const dataToShow = displayedView ? comradeMeets : allMeets;

  return (
    <main className="flex flex-col gap-4 p-4">
      <MeetToggle
        isComradeView={isComradeView}
        setIsComradeView={handleToggle}
      />
      <div className="mt-10 w-full flex justify-between items-center border-b-gray-500 border-b-2 border-b-solid">
        <div>Date</div>
        <div>Event</div>
        <div>Points</div>
      </div>

      <div className="flex flex-col gap-4">
        {dataToShow.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No meets found.</p>
        ) : (
          dataToShow.map((meet, ind) => (
            <MeetLink
              key={meet.id}
              {...meet}
              ind={ind}
              isExiting={isAnimatingOut}
            />
          ))
        )}
      </div>
    </main>
  );
};
