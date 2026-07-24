"use server";

import { prisma } from "@/lib/prisma";

export const newMeet = async (
  creatorId: number,
  prevState: any,
  formData: FormData,
) => {
  console.log("SERVER ACTION HIT! CreatorID:", creatorId);
  const meetName = formData.get("meetName") as string;
  const selectedLocation = formData.get("location") as string;
  const customLocation = formData.get("customLocation") as string;
  const dateString = formData.get("date") as string;
  const finalLocation =
    selectedLocation === "custom" ? customLocation : selectedLocation;
  try {
    const newMeet = await prisma.meet.create({
      data: {
        name: meetName,
        creatorId,
        date: dateString,
        location: finalLocation,
      },
    });
    return newMeet;
  } catch (err) {
    console.error("error when creating a new meet ", err);
    return { success: false, error: "failed to create meet" };
  }
};
