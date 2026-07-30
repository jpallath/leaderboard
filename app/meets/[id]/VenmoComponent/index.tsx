"use client";
import { useState } from "react";
import { AddVenmoDetails } from "./AddVenmoDetails";
import { User } from "@/prisma/generated/client";
import QRCode from "react-qr-code";

export type VenmoComponentProps = {
  currentUser: User;
  venmoUrl: string | null;
  venmoUser: string | null;
  meetId: number;
};

export default function VenmoComponent({
  currentUser,
  venmoUrl,
  venmoUser,
  meetId,
}: VenmoComponentProps) {
  const [updateVenmoUrl, setUpdateVenmoUrl] = useState<boolean>(false);

  // If there is no meet venmo yet, OR the user clicked to edit/change it:
  if (!venmoUrl || updateVenmoUrl) {
    return (
      <>
        <AddVenmoDetails
          userVenmoUrl={currentUser.venmoUrl}
          username={currentUser.username} // <-- Added this
          venmoUser={null} // <-- Added this (or pass your prop if available)
          userId={currentUser.id}
          meetId={meetId}
          updateVenmoUrl={updateVenmoUrl}
          setUpdateVenmoUrl={setUpdateVenmoUrl}
        />
      </>
    );
  }

  // Otherwise, show the meet's Venmo QR code to EVERYONE viewing the page
  return (
    <div className="flex flex-col items-center mt-5">
      <QRCode
        value={venmoUrl}
        size={200}
        style={{
          height: "auto",
          maxWidth: "50%",
          width: "50%",
        }}
        fgColor="#008CFF"
        viewBox={`0 0 200 200`}
      />
      <a href={venmoUrl} className="text-sm underline mt-2">
        Venmo for {venmoUser || "Meet Organizer"}
      </a>

      {/* Option to update it if needed */}
      <p
        className="cursor-pointer text-xs text-blue-500 mt-2"
        onClick={() => setUpdateVenmoUrl(true)}
      >
        Wrong venmo? Click here!
      </p>
    </div>
  );
}
