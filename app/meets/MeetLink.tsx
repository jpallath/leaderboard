import { MeetProps } from "../types";
import Link from "next/link";
import { locationLabels } from "@/constants/meetingLocations";
import { useMounted } from "@/hooks/useMounted";
export const MeetLink = (
  meet: MeetProps & { ind?: number; isExiting?: boolean },
) => {
  const { animationClasses, transitionDelay } = useMounted(
    meet.ind,
    meet.isExiting,
  );
  const readAbleDate = new Date(meet.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link
      href={`/meets/${meet.id}`}
      style={{
        transitionDelay,
      }}
      className={`rounded-xl flex justify-between items-center ${
        meet.ind !== undefined && meet.ind % 2
          ? "bg-accent text-white"
          : "bg-surface text-black"
      } p-4 transition-all duration-300 ease-out transform ${animationClasses} hover:scale-[1.01]`}
    >
      <div>{readAbleDate}</div>
      <div className="flex flex-col items-center">
        <div className="font-bold">{meet.name}</div>
        <div>{locationLabels[meet.location]}</div>
      </div>
      <div>{meet.points}</div>
    </Link>
  );
};
