import { VerifyRunnersProps } from "@/app/types";
import { VerifyRunners } from "./VerifyRunners";

export const CoreWork = ({
  meet,
  verifiedRunners,
  unverifiedRunners,
}: VerifyRunnersProps) => {
  return (
    <div>
      <VerifyRunners
        verifiedRunners={verifiedRunners}
        unverifiedRunners={unverifiedRunners}
        meet={meet}
      />
    </div>
  );
};
