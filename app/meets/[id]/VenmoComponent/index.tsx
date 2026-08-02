"use client";

import { useUpdateVenmo } from "@/hooks/useUpdateVenmo";
import { AddVenmoDetails } from "./AddVenmoDetails";
import { User } from "@/prisma/generated/client";
import QRCode from "react-qr-code";
import { useAnimation } from "@/hooks/useAnimation";

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

export const VenmoComponentContainer = ({
  currentUser,
  venmoUrl,
  venmoUser,
  meetId,
}: VenmoComponentProps) => {
  const { animation, setAnimation } = useAnimation();
  return (
    <div className="w-full my-2 overflow-hidden rounded-xl bg-background">
      <div
        className="w-full bg-[#008CFF] text-white p-3 font-medium cursor-pointer flex justify-between items-center transition select-none"
        onClick={() => setAnimation(!animation)}
      >
        <span>Venmo Details</span>
        <span
          className={`transform transition-transform duration-300 ${animation ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out overflow-hidden ${
          animation
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden p-3 bg-surface">
          <VenmoComponent
            currentUser={currentUser}
            venmoUrl={venmoUrl}
            venmoUser={venmoUser}
            meetId={meetId}
          />
        </div>
      </div>
    </div>
  );
};
