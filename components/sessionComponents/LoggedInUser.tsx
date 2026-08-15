"use client";

import Leaderboard from "../leaderboard";
import { CurrentUserProps } from "@/app/types";
import { UserNavigation } from "./UserNavigation";
import { useState } from "react";
import { QRCodeInForm } from "../qrCodes/QRCodeInForm";

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
      <div className="fixed top-20 left-1/2 -translate-x-1/2 flex items-center bg-gray-100 p-1 rounded-full z-10 w-48 shadow-sm">
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-red-500 rounded-full transition-transform duration-300 ease-in-out ${
            leaderboardView ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
          }`}
        />
        <span
          onClick={() => setLeaderboardView(false)}
          className={`relative z-10 flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer select-none transition-colors duration-300 active:scale-95 ${
            !leaderboardView ? "text-white" : "text-gray-600 hover:text-black"
          }`}
        >
          Home
        </span>
        <span
          onClick={() => setLeaderboardView(true)}
          className={`relative z-10 flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer select-none transition-colors duration-300 active:scale-95 ${
            leaderboardView ? "text-white" : "text-gray-600 hover:text-black"
          }`}
        >
          Leaderboard
        </span>
      </div>
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
