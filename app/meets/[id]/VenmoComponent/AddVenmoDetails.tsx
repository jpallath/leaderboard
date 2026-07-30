"use client";
import { updateMeetWithVenmoDetails } from "@/actions/meets";
import { updateUserAndMeetWithVenmoDetails } from "@/actions/userMeets";
import { useState } from "react";

export type VenmoDetailsComponentProps = {
  userVenmoUrl: string | null;
  userId: number;
  username: string;
  meetId: number;
  updateVenmoUrl: boolean;
  setUpdateVenmoUrl: (updateVenmoUrl: boolean) => void;
  venmoUser: string | null;
};

export const AddVenmoDetails = ({
  userVenmoUrl,
  userId,
  username,
  meetId,
  updateVenmoUrl,
  setUpdateVenmoUrl,
  venmoUser,
}: VenmoDetailsComponentProps) => {
  const [venmoUrl, setVenmoUrl] = useState<string>("");

  const updateVenmo = async () => {
    await updateUserAndMeetWithVenmoDetails(venmoUrl, userId, meetId);
    setUpdateVenmoUrl(false);
  };

  // if there are no venmoDetails attached i want to show the "addVenmoDetails button"
  // if the venmoURL exists on the user, then just press the submit buttom
  // if the venmUrl doesnt exist on the user then they should have an input
  // if theres an issue and they want to update it they should press the edit button and submit

  const showInputComponent = !userVenmoUrl || updateVenmoUrl ? true : false;
  if (venmoUser && venmoUser === username) {
    if (showInputComponent) {
      return (
        <div className="flex flex-col m-2">
          <label className="text-xs font-medium text-content-muted">
            Add Venomo Url
          </label>
          <div className="flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="https://venmo.com/code?user_id=****"
              value={venmoUrl}
              onChange={(e) => setVenmoUrl(e.target.value)}
              className="p-2 border rounded-xl bg-background text-content flex-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateVenmo();
                }
              }}
            />
            <button
              onClick={() => updateVenmo()}
              className="p-2 bg-[#008CFF] text-white rounded-xl font-medium transition active:scale-95"
            >
              Add Venmo
            </button>
          </div>
        </div>
      );
    } else {
      if (userVenmoUrl) {
        return (
          <div className="m-2 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-lg font-black text-center">{userVenmoUrl}</h1>
              <button
                onClick={() =>
                  updateMeetWithVenmoDetails(userVenmoUrl, username, meetId)
                }
                className="p-2 bg-[#008CFF] text-white rounded-xl font-medium transition active:scale-95"
              >
                Add Venmo
              </button>
            </div>
            <p onClick={() => setUpdateVenmoUrl(true)}>
              Wrong venmo? Click here
            </p>
          </div>
        );
      }
    }
  } else {
    return null;
  }
};
