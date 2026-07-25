import { LeaderboardProps, LeaderItemProps, MeetProps } from "@/app/types";

const Leaderboard = ({ leaders }: LeaderboardProps) => {
  if (leaders && leaders.length > 0) {
    const Leaders = leaders.map((l, idx) => {
      return (
        <LeaderItem
          name={l.name}
          totalPoints={l.totalPoints}
          username={l.username}
          place={l.place}
          key={idx}
          id={l.id}
        />
      );
    });
    return (
      <div>
        <h1 className="text-2xl text-center font-bold">Current Standings</h1>
        {Leaders}
      </div>
    );
  }
};

export default Leaderboard;

type LeaderProps = {
  name: string | null;
  username: string;
  meets: MeetProps[];
  place: number;
};
const LeaderItem = ({
  name,
  username,
  totalPoints,
  place,
}: LeaderItemProps) => {
  return (
    <div
      className={`${place % 2 == 0 ? "bg-background" : "bg-surface"} flex justify-between items-center p-3 border-b border-surface-border`}
    >
      <div className="flex items-center">
        <div className="w-8 text-right font-bold mr-3 text-content-muted">
          {place}.
        </div>
        <div className="font-medium">{name || username}</div>
      </div>
      <div className="font-semibold text-accent">{totalPoints} pts</div>
    </div>
  );
};
