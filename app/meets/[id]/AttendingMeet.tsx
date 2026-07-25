"use client";
import { leaveMeet } from "@/actions/userMeets";
import { CurrentUserProps, MeetProps, UserProps } from "@/app/types";
import { ShowQRCode } from "@/components/qrCodes/ShowQRCode";
import { locationLabels } from "@/constants/meetingLocations";

type UserMeetProps = {
  meetDetails: MeetProps;
  currentUser: CurrentUserProps;
  qrLink: string;
  runners: UserProps[];
};

export const AttendingMeet = ({
  meetDetails,
  currentUser,
  qrLink,
  runners,
}: UserMeetProps) => {
  const prettyLocation =
    locationLabels[meetDetails.location] || meetDetails.location;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1>{meetDetails.name}</h1>
        <h1>{prettyLocation}</h1>
        <ShowQRCode qrValue={qrLink} />
        <div className="text-black m-4">
          <h3 className="text-accent font-bold text-center">Attendees:</h3>
          <div>
            {runners.map((r, idx) => {
              let comma = ",";
              if (idx + 1 == runners.length) {
                comma = "";
              }
              return (
                <span className="" key={r.id || idx}>
                  {r.name || r.username}
                  {comma}{" "}
                </span>
              );
            })}
          </div>
        </div>
        <button
          className="border-2 border-solid border-accent bg-accent p-2 text-white rounded-xl pointer-events-auto transition active:bg-white active:text-black active:scale-95"
          onClick={() => {
            if (currentUser.id !== undefined) {
              leaveMeet(currentUser.id, meetDetails.id);
            }
          }}
        >
          Can't Attend? Click Here!
        </button>
      </div>
    </div>
  );
};
