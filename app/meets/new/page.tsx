import { getCurrentCore } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewMeetForm } from "./NewMeetForm";

export default async function page() {
  const currentUser = await getCurrentCore();
  if (!currentUser) {
    redirect("/");
  }

  const rootURL = process.env.ROOT_URL || "http://localhost:3000";

  return (
    <>
      <NewMeetForm currentUser={currentUser} rootURL={rootURL} />
    </>
  );
}
