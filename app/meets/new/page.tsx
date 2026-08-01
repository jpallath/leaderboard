import { getCurrentCore } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewMeetForm } from "./NewMeetForm";

export default async function page() {
  const currentUser = await getCurrentCore();
  if (!currentUser) {
    redirect("/");
  }

  return (
    <>
      <NewMeetForm currentUser={currentUser} />
    </>
  );
}
