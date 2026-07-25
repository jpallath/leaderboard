"use client";
import { leaveMeet } from "@/actions/userMeets";
import { CurrentUserProps, MeetProps, UserProps } from "@/app/types";
import { ShowQRCode } from "@/components/qrCodes/ShowQRCode";
import { MeetLocation } from "@/constants/meetingLocations";

// Map the string values to their human-readable labels
const locationLabels: Record<string, string> = {
  [MeetLocation.ProspectMorning]: "Prospect Park Morning Loop",
  [MeetLocation.ProspectEvening]: "Prospect Park Evening Loop",
  [MeetLocation.Riverside]: "Riverside Evening Run",
  [MeetLocation.Sunset]: "Sunset Park Lap",
  [MeetLocation.CentralPark]: "Central Park Run",
  [MeetLocation.Chinatown]: "Chinatown Office Loop",
  [MeetLocation.Queens]: "Queens",
  [MeetLocation.Custom]: "Custom",
};

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
    <div className="flex flex-col">
      <div>
        <h1>{meetDetails.name}</h1>
        <h1>{prettyLocation}</h1>
        <p className="text-black">
          <span className="text-accent">Attendees:</span>
          {runners.map((r, idx) => {
            let comma = ",";
            if (idx + 1 == runners.length) {
              comma = "";
            }
            return (
              <span key={r.id || idx}>
                {r.username}
                {comma}{" "}
              </span>
            );
          })}
        </p>
        <ShowQRCode qrValue={qrLink} />
        <button
          className="border-2 border-solid border-accent bg-accent p-2 text-white rounded-xl pointer-events-auto transition active:bg-white active:text-black active:scale-95"
          onClick={() => {
            leaveMeet(currentUser.id, meetDetails.id);
          }}
        >
          Can't Attend? Click Here!
        </button>
      </div>
    </div>
  );
};
