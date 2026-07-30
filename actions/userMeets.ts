"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { updateUserWithVenmoUrl } from "./users";
import { updateMeetWithVenmoDetails } from "./meets";

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

export const verifyRunnerAtMeet = async (userId: number, meetId: number) => {
  let userMeet;
  try {
    userMeet = await prisma.userMeet.updateMany({
      where: { userId, meetId },
      data: { verified: true },
    });
  } catch (err) {
    console.error("error in verifying runner! ", err);
  }
  revalidatePath(`/meets/${meetId}`);
};

export const unverifyRunnerAtMeet = async (userId: number, meetId: number) => {
  let userMeet;
  try {
    userMeet = await prisma.userMeet.updateMany({
      where: { userId, meetId },
      data: { verified: false },
    });
  } catch (err) {
    console.error("error in verifying runner! ", err);
  }
  revalidatePath(`/meets/${meetId}`);
};

export const updateUserAndMeetWithVenmoDetails = async (
  venmoUrl: string,
  userId: number,
  meetId: number,
) => {
  try {
    const user = await updateUserWithVenmoUrl(venmoUrl, userId);
    await updateMeetWithVenmoDetails(venmoUrl, user.username, meetId);
  } catch (err) {
    console.error("error at updateMeetWithVenmoDetails, ", err);
    throw err;
  }
  revalidatePath(`/meets/${meetId}`);
};
