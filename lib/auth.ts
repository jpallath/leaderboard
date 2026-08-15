import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("session_user_id");
  if (!userIdCookie) {
    return null;
  }
  const currentUser = await prisma.user.findUnique({
    where: { id: parseInt(userIdCookie.value) },
    include: { meets: { include: { meet: true } } },
  });
  return currentUser;
}

export async function getCurrentCore() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("session_user_id");
  if (!userIdCookie) {
    return null;
  }
  const currentUser = await prisma.user.findUnique({
    where: { id: parseInt(userIdCookie.value) },
  });
  if (currentUser?.userType === "core" || currentUser?.userType === "admin") {
    return currentUser;
  } else {
    return null;
  }
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("session_user_id");
  if (!userIdCookie) {
    return null;
  }
  const currentUser = await prisma.user.findUnique({
    where: { id: parseInt(userIdCookie.value) },
  });
  if (currentUser?.userType === "admin") {
    return currentUser;
  } else {
    return null;
  }
}
