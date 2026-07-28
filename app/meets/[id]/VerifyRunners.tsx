"use client";
import { MeetProps } from "@/app/types";
import { unverifyRunnerAtMeet, verifyRunnerAtMeet } from "@/actions/userMeets";

export type RunnerWithMeet = {
  user: {
    id: number;
    name: string | null;
    username: string;
  };
  userMeet: {
    id: number;
    verified: boolean;
  };
};

export type VerifyRunnersProps = {
  runners: RunnerWithMeet[];
  meet: MeetProps;
};
export type VerifyRunnerItemProp = {
  runner: RunnerWithMeet;
  meet: MeetProps;
};
export const VerifyRunners = ({ runners, meet }: VerifyRunnersProps) => {
  if (runners.length > 0) {
    return (
      <section className="flex flex-col items-center p-4 bg-surface border-surface-border border-2 border-solid rounded-xl">
        <h1 className="text-xl font-bold">Verify Runners</h1>
        <div className="flex flex-col w-full gap-2">
          {runners.map((runner) => (
            <VerifyRunnerItem
              runner={runner}
              meet={meet}
              key={runner.user.id}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export const VerifyRunnerItem = ({ runner, meet }: VerifyRunnerItemProp) => {
  return (
    <li
      className={`${runner.userMeet.verified ? "bg-surface text-black" : "bg-accent text-white"} rounded-xl p-2 flex justify-between`}
    >
      <div>{runner.user.name || runner.user.username}</div>
      <div className="flex items-center gap-2">
        {runner.userMeet.verified ? (
          <button
            onClick={() => unverifyRunnerAtMeet(runner.user.id, meet.id)}
            className="h-10 w-10 bg-surface rounded-xl flex items-center justify-center text-white transition active:scale-95 active:bg-accent border-surface-border border-2 border-solid"
          >
            ❌
          </button>
        ) : (
          <button
            onClick={() => verifyRunnerAtMeet(runner.user.id, meet.id)}
            className="h-10 w-10 bg-surface rounded-xl flex items-center justify-center text-white transition active:scale-95 active:bg-surface border-surface-border border-2 border-solid"
          >
            ✅
          </button>
        )}
      </div>
    </li>
  );
};
