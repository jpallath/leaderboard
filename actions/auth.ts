"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const registerUser = async (formData: FormData) => {
  const username = (formData.get("username") as string).toLowerCase();
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    throw new Error("username and password are required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        name,
        password: hashedPassword,
      },
    });
    const cookieStore = await cookies();
    cookieStore.set("session_user_id", user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
  } catch (err) {
    console.error(err);
    throw new Error("Username is already taken or database error");
  }
  redirect("/");
};

export const loginUser = async (formData: FormData) => {
  const username = (formData.get("username") as string).toLowerCase();
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !user.password) {
    return { error: "Invalid username or password" };
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return { error: "Invalid username or password" };
  }
  const cookieStore = await cookies();
  cookieStore.set("session_user_id", user.id.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return { success: true };
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session_user_id");
  redirect("/");
};

export const updateResetPassword = async (formData: FormData) => {
  const username = (formData.get("username") as string)?.toLowerCase();
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required" };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
      where: {
        username,
        resetPassword: true,
      },
      data: {
        password: hashedPassword,
        resetPassword: false,
      },
    });

    const cookieStore = await cookies();
    cookieStore.set("session_user_id", user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
  } catch (err) {
    console.error(err);
    return { error: "Invalid username or user not flagged for password reset" };
  }
  redirect("/");
};
