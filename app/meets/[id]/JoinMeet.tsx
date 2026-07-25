"use client";
import { joinMeet } from "@/actions/userMeets";
import { CurrentUserProps, MeetProps } from "@/app/types";

type JoinMeetProps = {
  meetDetails: MeetProps;
  currentUser: CurrentUserProps;
};
export const JoinMeet = ({ meetDetails, currentUser }: JoinMeetProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <h1>{meetDetails.name}</h1>
        <h1>{meetDetails.location}</h1>
        <button
          className="border-2 border-solid border-accent bg-accent p-2 text-white rounded-xl pointer-events-auto transition active:bg-white active:text-black active:scale-95"
          onClick={() => {
            joinMeet(currentUser.id, meetDetails.id);
          }}
        >
          Join the event!
        </button>
      </div>
    </div>
  );
};
