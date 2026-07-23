import { logoutUser } from "@/app/actions/auth";
import Leaderboard from "../leaderboard";
import { CurrentUserProps } from "@/app/types";

export const LoggedInUser = ({ username, name, meets }: CurrentUserProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-content">
      <div className="w-full max-w-md rounded-2xl bg-surface border border-surface-border p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black">
            Welcome back,{" "}
            <span className="text-accent">{name || username}</span>!
          </h1>
          <form action={logoutUser}>
            <button className="text-xs text-content-muted hover:text-accent font-medium transition">
              Sign Out
            </button>
          </form>
        </div>
        <Leaderboard />
      </div>
    </main>
  );
};
