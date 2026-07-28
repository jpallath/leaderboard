import { getCurrentUser } from "@/lib/auth";
import { LoggedInUser } from "../components/sessionComponents/LoggedInUser";
import { RegisterSigninUser } from "../components/sessionComponents/RegisterSignInUser";
import { prisma } from "@/lib/prisma";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    const users = await prisma.user.findMany({
      include: {
        meets: {
          include: {
            meet: {
              select: {
                points: true,
                date: true,
              },
            },
          },
        },
      },
    });

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const leaders = users.map((user) => {
      const totalPoints = user.meets.reduce((sum, userMeet) => {
        const meetDate = new Date(userMeet.meet.date);

        // Must be verified AND happened at least 24 hours ago
        if (userMeet.verified && meetDate <= oneDayAgo) {
          return sum + (userMeet.meet.points || 0);
        } else {
          return sum;
        }
      }, 0);

      return {
        id: user.id,
        username: user.username,
        name: user.name,
        totalPoints,
      };
    });

    leaders.sort((a, b) => b.totalPoints - a.totalPoints);

    const rankedLeaders = leaders.map((leader, i) => {
      return { ...leader, name: leader.name || leader.username, place: i + 1 };
    });

    const passedLeaders = rankedLeaders.slice(0, 10);

    return (
      <LoggedInUser
        username={currentUser.username}
        name={currentUser.name}
        id={currentUser.id}
        userType={currentUser.userType}
        leaders={passedLeaders}
      />
    );
  }

  return <RegisterSigninUser searchParams={searchParams} />;
}
