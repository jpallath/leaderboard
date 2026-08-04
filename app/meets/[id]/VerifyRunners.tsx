"use client";
import { VerifyRunnerItemProp, VerifyRunnersProps } from "@/app/types";
import { unverifyRunnerAtMeet, verifyRunnerAtMeet } from "@/actions/userMeets";
import { useAnimation } from "@/hooks/useAnimation";

export const VerifyRunners = ({ runners, meet }: VerifyRunnersProps) => {
  const { animation, setAnimation } = useAnimation();
  if (runners.length > 0) {
    return (
      <section className="flex flex-col w-full overflow-hidden rounded-xl bg-background">
        <div
          className="flex w-full cursor-pointer items-center justify-between bg-accent p-3 font-bold text-white transition select-none"
          onClick={() => setAnimation(!animation)}
        >
          <span>Core Work</span>
          <span
            className={`transform transition-transform duration-300 ${animation ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </div>
        <div
          className={`grid w-full transition-all duration-300 ease-out overflow-hidden ${
            animation ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          {/* Added opacity transition here on the wrapper so items fade in nicely as the accordion opens */}
          <div
            className={`overflow-hidden flex flex-col gap-2 p-4 bg-surface transition-opacity duration-300 ${animation ? "opacity-100 delay-100" : "opacity-0"}`}
          >
            {runners.map((runner) => (
              <VerifyRunnerItem
                runner={runner}
                meet={meet}
                key={runner.user.id}
                animation={animation}
              />
            ))}
          </div>
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
      className={`${runner.userMeet.verified ? "bg-surface text-black" : "bg-accent text-white"} rounded-xl p-2 flex justify-between items-center`}
    >
      <div>{runner.user.name || runner.user.username}</div>
      <div className="flex items-center gap-2">
        {runner.userMeet.verified ? (
          <button
            onClick={() => unverifyRunnerAtMeet(runner.user.id, meet.id)}
            className="h-10 w-10 bg-surface rounded-xl flex items-center justify-center text-white transition active:scale-95 active:bg-accent "
          >
            ❌
          </button>
        ) : (
          <button
            onClick={() => verifyRunnerAtMeet(runner.user.id, meet.id)}
            className="h-10 w-10 bg-surface rounded-xl flex items-center justify-center text-white transition active:scale-95 active:bg-surface"
          >
            ✅
          </button>
        )}
      </div>
    </li>
  );
};
