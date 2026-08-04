import { unverifyRunnerAtMeet, verifyRunnerAtMeet } from "@/actions/userMeets";
import { VerifyRunnerItemProp } from "@/app/types";

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
