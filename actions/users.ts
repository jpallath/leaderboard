"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const changePassword = async (formData: FormData) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw new Error("Unauthorized");
  }

  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: "All fields are required." };
  }

  if (newPassword !== confirmPassword) {
    return { error: "New passwords do not match." };
  }

  // 1. Fetch the user with their password hash
  const user = await prisma.user.findUnique({
    where: { id: currentUser.id },
  });

  if (!user) {
    return { error: "User not found." };
  }

  // 2. Verify their current (temporary) password
  if (!user.password) {
    return { error: "No password set for this account." };
  }

  const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
  if (!passwordsMatch) {
    return { error: "Incorrect current password." };
  }

  // 3. Hash the new password and save it
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: currentUser.id },
    data: { password: hashedPassword },
  });

  return { success: "Password updated successfully!" };
};
