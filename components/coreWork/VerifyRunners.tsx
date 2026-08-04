"use client";
import { VerifyRunnersProps } from "@/app/types";
import { useAnimation } from "@/hooks/useAnimation";
import { VerifyRunnerItem } from "./VerifyRunnerItem";

export const VerifyRunners = ({
  verifiedRunners,
  unverifiedRunners,
  meet,
}: VerifyRunnersProps) => {
  const { animation, setAnimation } = useAnimation();
  if (verifiedRunners.length > 0) {
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
          <div
            className={`overflow-hidden flex flex-col gap-2 p-4 bg-surface transition-opacity duration-300 ${animation ? "opacity-100 delay-100" : "opacity-0"}`}
          >
            <h1 className="text-center text-xl">
              Did these runners attend the meet?
            </h1>
            {unverifiedRunners.map((runner) => (
              <VerifyRunnerItem
                runner={runner}
                meet={meet}
                key={runner.user.id}
                animation={animation}
              />
            ))}
          </div>
          <div
            className={`overflow-hidden flex flex-col gap-2 p-4 bg-surface transition-opacity duration-300 ${animation ? "opacity-100 delay-100" : "opacity-0"}`}
          >
            <h1 className="text-center text-xl">Verified Runners</h1>
            {verifiedRunners.map((runner) => (
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
