"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const registerUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
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
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !user.password) {
    console.error("testing");
    throw new Error("invalid username or password");
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    throw new Error("invalid username or password");
  }
  const cookieStore = await cookies();
  cookieStore.set("session_user_id", user.id.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

export const logoutUser = async () => {
  console.log("testijasdkf");
  const cookieStore = await cookies();
  cookieStore.delete("session_user_id");
  redirect("/");
};
