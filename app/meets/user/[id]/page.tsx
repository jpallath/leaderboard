import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { MeetLink } from "../../page";
MeetLink;

export default async function MeetsUserPage() {
  const currentUser = await getCurrentUser();
  const meets = await prisma.meet.findMany({
    where: {
      attendees: {
        some: {
          userId: currentUser?.id,
        },
      },
    },
  });
  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="w-full flex justify-between items-center border-b-gray-500 border-b-2 border-b-solid">
        <div>Date</div>
        <div>Event</div>
        <div>Points</div>
      </div>
      {meets.map((meet, ind) => (
        <MeetLink key={meet.id} {...meet} ind={ind} />
      ))}
    </main>
  );
}
