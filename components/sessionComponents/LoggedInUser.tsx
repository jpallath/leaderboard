"use client";
import { logoutUser } from "@/actions/auth";
import Leaderboard from "../leaderboard";
import { CurrentUserProps } from "@/app/types";
import Link from "next/link";

export const LoggedInUser = ({ username, name, meets }: CurrentUserProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-content gap-4">
      <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border p-8">
        <Leaderboard />
      </div>
      <div className="w-full p-2 mb-6 flex flex-col bg-surface border-solid border-surface-border border-2 rounded-2xl">
        <h1 className="text-lg font-black">
          Welcome back, <span className="text-accent">{name || username}</span>!
        </h1>
        <div className="flex items-center gap-2 justify-center">
          <Link
            href={"/meets"}
            className="text-xs text-accent hover:text-accent font-medium transition p-2"
          >
            All Meets
          </Link>
          <Link
            href={"/meets/new"}
            className="text-xs text-accent hover:text-accent font-medium transition p-2"
          >
            New Meet
          </Link>
          <form action={logoutUser}>
            <button className="text-xs text-content-muted hover:text-accent font-medium transition p-2">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
