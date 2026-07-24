import { getCurrentCore } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewEventForm } from "./NewPageForm";

export default async function page() {
  const currentUser = await getCurrentCore();
  if (!currentUser) {
    redirect("/");
  }

  return (
    <main>
      <NewEventForm />
    </main>
  );
}
