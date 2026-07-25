"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const joinMeet = async (userId: number, meetId: number) => {
  let userMeet;
  try {
    userMeet = await prisma.userMeet.create({ data: { userId, meetId } });
  } catch (err) {
    console.error("Error in adding user to meet, ", err);
  }
  revalidatePath(`/meets/${meetId}`);
};

export const leaveMeet = async (userId: number, meetId: number) => {
  let userMeet;
  try {
    userMeet = await prisma.userMeet.deleteMany({ where: { userId, meetId } });
  } catch (err) {
    console.error("couldnt remove user from meet, ", err);
  }
  revalidatePath(`/meets/${meetId}`);
};
