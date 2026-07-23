import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

import { LoggedInUser } from "./components/sessionComponents/LoggedInUser";
import { RegisterSigninUser } from "./components/sessionComponents/RegisterSignInUser";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("session_user_id");

  let currentUser = null;
  if (userIdCookie) {
    currentUser = await prisma.user.findUnique({
      where: { id: parseInt(userIdCookie.value) },
      include: { meets: { include: { meet: true } } },
    });
  }

  // --- VIEW IF LOGGED IN ---
  if (currentUser) {
    const formattedMeets = currentUser.meets.map((ue) => ({
      id: ue.meet.id,
      name: ue.meet.name,
      date: ue.meet.date,
      points: 0, // or whatever fields you need
      attendees: [],
    }));
    return (
      <LoggedInUser
        username={currentUser.username}
        name={currentUser.name}
        meets={formattedMeets}
      />
    );
  }

  return <RegisterSigninUser searchParams={searchParams} />;
}
