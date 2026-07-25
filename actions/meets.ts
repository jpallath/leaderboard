"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function newMeet(
  creatorId: number,
  prevState: any,
  formData: FormData,
) {
  const meetName = formData.get("meetName") as string;
  const selectedLocation = formData.get("location") as string;
  const customLocation = formData.get("customLocation") as string;
  const dateString = formData.get("date") as string;
  const finalLocation =
    selectedLocation === "custom" ? customLocation : selectedLocation;
  let createdMeet;
  try {
    createdMeet = await prisma.meet.create({
      data: {
        name: meetName,
        creatorId: Number(creatorId),
        date: dateString,
        location: finalLocation,
      },
    });
  } catch (err) {
    console.error("CRITICAL DB ERROR IN newMeet:", err);
    return { success: false, meet: null, error: "failed to create meet" };
  }
  revalidatePath("/meets");
  redirect(`/meets/${createdMeet.id}`);
}
