import { logoutUser } from "@/app/actions/auth";
type CurrentUserProps = {
  username: string;
  name: string | null;
  meets: Meets[];
};

type Meets = {
  id: number;
  name: string;
  date: Date;
  points: number;
  attendees: any[];
};

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

        <div className="rounded-xl bg-background border border-surface-border p-4 mb-6">
          <p className="text-sm font-medium text-content-muted">
            Your Registered Events
          </p>
          <p className="text-xl font-bold mt-1">
            {meets.length} Meets Attended
          </p>
        </div>

        <div className="text-center text-sm text-content-muted">
          Run club leaderboard dashboard coming soon...
        </div>
      </div>
    </main>
  );
};
