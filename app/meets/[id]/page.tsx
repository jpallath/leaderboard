import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { JoinMeet } from "./JoinMeet";
import { AttendingMeet } from "./AttendingMeet";
import { VerifyRunners } from "./VerifyRunners";
import { VenmoComponentContainer } from "./VenmoComponent";
import { CoreWork } from "@/components/coreWork";

type MeetPageProps = {
  params: Promise<{
    id: string;
  }>;
};
const MeetPage = async ({ params }: MeetPageProps) => {
  const { id } = await params;
  let meetDetails = null;
  try {
    meetDetails = await prisma.meet.findUnique({
      where: { id: Number(id) },
    });
  } catch (err) {
    console.error("there was an error at the meet details page, ", err);
  }

  if (!meetDetails) {
    return <div>Could not find meet!</div>;
  }

  // past or present logic
  const [year, month, day] = meetDetails.date.split("-").map(Number);
  const meetDateMs = new Date(year, month - 1, day).getTime();
  const gracePeriodMs = 24 * 60 * 60 * 1000;
  const meetDeadline = meetDateMs + gracePeriodMs;
  const now = new Date().getTime();
  const hasHappened = now > meetDeadline;

  // attending or to attend logic
  const currentUser = await getCurrentUser();
  let isUserInMeet = null;
  if (currentUser) {
    isUserInMeet = await prisma.userMeet.findFirst({
      where: { userId: currentUser.id, meetId: Number(id) },
    });
  }

  if (!currentUser) {
    return <div>You need to sign in or sign up and then you can register!</div>;
  }

  const rootURL = process.env.ROOT_URL || "localhost:3000";
  const qrLink = `${rootURL}/meets/${meetDetails.id}`;
  const meetWithAttendees = await prisma.meet.findUnique({
    where: { id: Number(id) },
    include: {
      attendees: {
        include: {
          user: {
            select: {
              id: true,
              username: true,
              name: true,
              userType: true,
            },
          },
        },
      },
    },
  });

  const runners = meetWithAttendees?.attendees.map((um) => um.user) || [];

  const runnersWithUserMeet =
    meetWithAttendees?.attendees.map((um) => ({
      user: um.user,
      userMeet: {
        id: um.id,
        verified: um.verified,
      },
    })) || [];

  const sortedRunners = runnersWithUserMeet.sort((a, b) => {
    const aVerified = a.userMeet?.verified ? 1 : 0;
    const bVerified = b.userMeet?.verified ? 1 : 0;

    return aVerified - bVerified; // 0 (false) comes before 1 (true)
  });

  const verifiedRunners = sortedRunners.filter(
    (runner) => runner.userMeet.verified,
  );
  const unverifiedRunners = sortedRunners.filter(
    (runner) => !runner.userMeet.verified,
  );

  return (
    <main className="p-4 flex flex-col ">
      {hasHappened ? (
        <div className="text-red-500">
          <h1>This meet has passed.</h1>
        </div>
      ) : (
        <div className="text-black">
          {isUserInMeet ? (
            // show the qr code to share with friends to attend
            <>
              <AttendingMeet
                currentUser={currentUser}
                meetDetails={meetDetails}
                qrLink={qrLink}
                runners={runners}
              />

              <VenmoComponentContainer
                currentUser={currentUser}
                venmoUrl={meetDetails.venmoUrl}
                venmoUser={meetDetails.venmoUser}
                meetId={meetDetails.id}
              />
            </>
          ) : (
            <JoinMeet currentUser={currentUser} meetDetails={meetDetails} />
          )}
        </div>
      )}
      {currentUser.userType === "core" && (
        <CoreWork
          verifiedRunners={verifiedRunners}
          unverifiedRunners={unverifiedRunners}
          meet={meetDetails}
        />
        // <VerifyRunners runners={sortedRunners} meet={meetDetails} />
      )}
    </main>
  );
};

export default MeetPage;
