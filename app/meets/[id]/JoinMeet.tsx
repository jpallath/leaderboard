"use client";
import { joinMeet } from "@/actions/userMeets";
import { CurrentUserProps, MeetProps } from "@/app/types";
import { locationLabels } from "@/constants/meetingLocations";

type JoinMeetProps = {
  meetDetails: MeetProps;
  currentUser: CurrentUserProps;
};
export const JoinMeet = ({ meetDetails, currentUser }: JoinMeetProps) => {
  return (
    <div className="flex justify-center h-[70dvh]">
      <div className="flex flex-col gap-2 items-center justify-center ">
        <h1 className="font-bold">{meetDetails.name}</h1>
        <h2>
          {new Date(meetDetails.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC", // Important to prevent off-by-one errors from timezones
          })}
        </h2>
        <h1>{locationLabels[meetDetails.location]}</h1>
        <button
          className="w-full border-2 border-solid border-accent bg-accent p-2 text-white rounded-xl pointer-events-auto transition active:bg-white active:text-black active:scale-95 shadow-2xl"
          onClick={() => {
            if (currentUser.id !== undefined) {
              joinMeet(currentUser.id, meetDetails.id);
            }
          }}
        >
          Join the event!
        </button>
      </div>
    </div>
  );
};
