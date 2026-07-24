import { getCurrentUser } from "@/lib/auth";
import { LoggedInUser } from "../components/sessionComponents/LoggedInUser";
import { RegisterSigninUser } from "../components/sessionComponents/RegisterSignInUser";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    const formattedMeets = currentUser.meets.map((ue) => ({
      id: ue.meet.id,
      name: ue.meet.name,
      date: ue.meet.date,
      points: ue.meet.points,
      location: ue.meet.location,
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
