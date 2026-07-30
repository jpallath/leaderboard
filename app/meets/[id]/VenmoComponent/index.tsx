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
  // i want this component to let a user plug in their venmo details, if the venmo details exist they can just press "show"
  // i also want it to be possible for them to delete their venmo details on the page
  // if venmo details does exist then we will just show that value for the user
  if (updateVenmoUrl || !venmoUrl) {
    return (
      <>
        <AddVenmoDetails
          userVenmoUrl={currentUser.venmoUrl}
          username={currentUser.username}
          venmoUser={venmoUser}
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
      <a href={venmoUrl}>venmo for {currentUser.username}</a>
      {venmoUser === currentUser.username && (
        <p onClick={() => setUpdateVenmoUrl(true)}>Wrong venmo? Click here</p>
      )}
    </div>
  );
}

const ShowVenmoDetails = () => {
  return <></>;
  // if wrong details we need to trigger addvenmodetails
  // this should simply be the QR code that opens venmo and the url underneath it.
};
