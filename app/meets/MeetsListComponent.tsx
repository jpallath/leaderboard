"use client";
import { MeetProps } from "../types";
import Link from "next/link";
import { locationLabels } from "@/constants/meetingLocations";
import MeetToggle from "./MeetToggle";
import { useState } from "react";
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
  const [isComradeView, setIsComradeView] = useState(showComradeMeets);
  const dataToShow = isComradeView ? comradeMeets : allMeets;
  return (
    <main className="flex flex-col gap-4 p-4">
      <MeetToggle
        isComradeView={isComradeView}
        setIsComradeView={setIsComradeView}
      />
      <div className="mt-10 w-full flex justify-between items-center border-b-gray-500 border-b-2 border-b-solid">
        <div>Date</div>
        <div>Event</div>
        <div>Points</div>
      </div>
      {dataToShow.map((meet, ind) => (
        <MeetLink key={meet.id} {...meet} ind={ind} />
      ))}
    </main>
  );
};

export const MeetLink = (meet: MeetProps) => {
  const readAbleDate = new Date(meet.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link
      href={`/meets/${meet.id}`}
      className={`rounded-xl flex justify-between items-center ${meet.ind && meet.ind % 2 ? "bg-accent text-white" : "bg-surface text-black"} p-4`}
    >
      <div>{readAbleDate}</div>
      <div className="flex flex-col items-center ">
        <div className="font-bold">{meet.name}</div>
        <div>{locationLabels[meet.location]}</div>
      </div>
      <div>{meet.points}</div>
    </Link>
  );
};
