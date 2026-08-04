import { getCurrentAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { UserList } from "./UserList";

const AdminPage = async () => {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/");
  }

  const allUsers = await prisma.user.findMany({
    orderBy: [{ name: "desc" }, { username: "desc" }],
  });

  return (
    <main>
      <UserList users={allUsers} />
    </main>
  );
};

export default AdminPage;
