import { prisma } from "@/lib/prisma";
import { MeetProps } from "../types";
import { getCurrentUser } from "@/lib/auth";
import { MeetsListComponent } from "./MeetsListComponent";
const EventsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ showComradeMeets?: boolean }>;
}) => {
  const allMeets = await prisma.meet.findMany({
    orderBy: { createdAt: "desc" },
  });

  const user = await getCurrentUser();
  let comradeMeets: MeetProps[] = [];

  const { showComradeMeets } = await searchParams;

  if (user) {
    comradeMeets = await prisma.meet.findMany({
      where: {
        attendees: {
          some: {
            userId: user.id,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  return (
    <MeetsListComponent
      allMeets={allMeets}
      comradeMeets={comradeMeets}
      showComradeMeets={showComradeMeets ? showComradeMeets : false}
    />
  );
};

export default EventsPage;
