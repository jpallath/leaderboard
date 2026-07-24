import { Meet } from "@/app/types";
import { leaders } from "./leaders";
const Leaderboard = () => {
  const Leaders = leaders.map((l, idx) => {
    return (
      <LeaderItem
        name={l.name}
        username={l.username}
        meets={l.meets}
        place={idx}
        key={idx}
      />
    );
  });
  return <div>{Leaders}</div>;
};

export default Leaderboard;

type LeaderProps = {
  name: string | null;
  username: string;
  meets: Meet[];
  place: number;
};
const LeaderItem = ({ name, username, meets, place }: LeaderProps) => {
  const points = meets.reduce((total, meet) => total + meet.points, 0);
  return (
    <div
      className={`${place % 2 == 0 ? "bg-background" : "bg-surface"} flex justify-between items-center p-3 border-b border-surface-border`}
    >
      <div className="flex items-center">
        {/* Fixed width and right alignment forces the periods to line up */}
        <div className="w-8 text-right font-bold mr-3 text-content-muted">
          {place + 1}.
        </div>
        <div className="font-medium">{name || username}</div>
      </div>
      <div className="font-semibold text-accent">{points} pts</div>
    </div>
  );
};
