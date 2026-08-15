"use client";

import Leaderboard from "../leaderboard";
import { CurrentUserProps } from "@/app/types";
import { UserNavigation } from "./UserNavigation";
import { useState } from "react";
import { QRCodeInForm } from "../qrCodes/QRCodeInForm";
import { LoggedInToggle } from "./loggedInToggle";

export const LoggedInUser = ({
  username,
  name,
  id,
  userType,
  leaders,
}: CurrentUserProps) => {
  const [leaderboardView, setLeaderboardView] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-content gap-4">
      <LoggedInToggle
        leaderboardView={leaderboardView}
        setLeaderboardView={setLeaderboardView}
      />
      {leaderboardView ? (
        <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border pt-24 p-8">
          <Leaderboard leaders={leaders} />
        </div>
      ) : (
        <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border pt-24 p-8">
          <QRCodeInForm
            qrValue={"https://socialists.nyc/running-club/"}
            text="Socialists.nyc/running"
          />
        </div>
      )}

      <UserNavigation
        username={username}
        name={name}
        id={id}
        userType={userType}
      />
    </main>
  );
};
