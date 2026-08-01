"use client";

import { useUpdateVenmo } from "@/hooks/useUpdateVenmo";
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
  const { updateVenmoUrl, setUpdateVenmoUrl } = useUpdateVenmo();

  if (!venmoUrl || updateVenmoUrl) {
    return (
      <>
        <AddVenmoDetails
          userVenmoUrl={currentUser.venmoUrl}
          username={currentUser.username}
          venmoUser={null}
          userId={currentUser.id}
          meetId={meetId}
          updateVenmoUrl={updateVenmoUrl}
          setUpdateVenmoUrl={setUpdateVenmoUrl}
        />
      </>
    );
  }

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

      <p
        className="cursor-pointer text-xs text-blue-500 mt-2"
        onClick={() => setUpdateVenmoUrl(true)}
      >
        Wrong venmo? Click here!
      </p>
    </div>
  );
}
