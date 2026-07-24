import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { MeetProps } from "../types";
const EventsPage = async () => {
  const allMeets = await prisma.meet.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="w-full flex justify-between items-center border-b-gray-500 border-b-2 border-b-solid">
        <div>Date</div>
        <div>Event</div>
        <div>Points</div>
      </div>
      {allMeets.map((meet, ind) => (
        <MeetLink key={meet.id} {...meet} ind={ind} />
      ))}
    </main>
  );
};

export default EventsPage;

const MeetLink = (meet: MeetProps) => {
  const rootURL = process.env.ROOT_URL;
  const readAbleDate = new Date(meet.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  console.log(meet.ind);

  return (
    <Link
      href={`${rootURL}/meets/${meet.id}`}
      className={`rounded-xl flex justify-between items-center ${meet.ind && meet.ind % 2 ? "bg-accent text-white" : "bg-surface text-black"} p-4`}
    >
      <div>{readAbleDate}</div>
      <div className="flex flex-col items-center ">
        <div className="font-bold">{meet.name}</div>
        <div>{meet.location}</div>
      </div>
      <div>{meet.points}</div>
    </Link>
  );
};
