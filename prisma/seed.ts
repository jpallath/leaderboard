import { prisma } from "../lib/prisma";
import { PrismaClient, UserType } from "./generated/client";
import { locationLabels } from "../lib/utils";



async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Clear existing data to avoid unique constraint violations on re-seed
  await prisma.userMeet.deleteMany();
  await prisma.meet.deleteMany();
  await prisma.user.deleteMany();

  // 2. Create 20 Runners
  console.log("Creating 20 runners...");
  const runnerNames = [
    "alex_runs",
    "sarah_sprints",
    "mike_jogger",
    "emma_pace",
    "david_dash",
    "chloe_cardio",
    "james_track",
    "olivia_mile",
    "lucas_stride",
    "hannah_hikes",
    "ethan_endurance",
    "mia_marathon",
    "noah_navigator",
    "sophia_speed",
    "liam_loop",
    "ava_active",
    "mason_motion",
    "isabella_interval",
    "logan_leg",
    "harper_hustle",
  ];

  const createdUsers = [];
  for (let i = 0; i < runnerNames.length; i++) {
    const username = runnerNames[i];
    const user = await prisma.user.create({
      data: {
        username,
        name: username
          .split("_")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" "),
        userType: i === 0 ? UserType.core : UserType.user, // Make the first user a 'core' type
      },
    });
    createdUsers.push(user);
  }

  // 3. Create 15 Meets
  console.log("Creating 15 meets...");
  const locationKeys = Object.keys(locationLabels);

  // Helper to generate dates around today (past, present, and future)
  const getRandomDateString = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split("T")[0];
  };

  const createdMeets = [];
  for (let i = 1; i <= 15; i++) {
    // Pick a random location key
    const randomLocation =
      locationKeys[Math.floor(Math.random() * locationKeys.length)];
    // Pick a random creator from our users
    const randomCreator =
      createdUsers[Math.floor(Math.random() * createdUsers.length)];
    // Spread dates from 5 days ago to 10 days in the future
    const dateString = getRandomDateString(i - 5);

    const meet = await prisma.meet.create({
      data: {
        name: `${locationLabels[randomLocation]} #${i}`,
        location: randomLocation,
        date: dateString,
        points: Math.floor(Math.random() * 3) + 1, // 1 to 3 points
        creatorId: randomCreator.id,
      },
    });
    createdMeets.push(meet);
  }

  // 4. Assign random runners to meets (UserMeet relations)
  console.log("Assigning runners to meets...");
  for (const meet of createdMeets) {
    // Pick between 3 to 10 random runners for each meet
    const shuffledUsers = [...createdUsers].sort(() => 0.5 - Math.random());
    const attendeesCount = Math.floor(Math.random() * 8) + 3;
    const selectedAttendees = shuffledUsers.slice(0, attendeesCount);

    for (const attendee of selectedAttendees) {
      try {
        await prisma.userMeet.create({
          data: {
            userId: attendee.id,
            meetId: meet.id,
          },
        });
      } catch {
        // Catch handles rare duplicate edge cases cleanly
      }
    }
  }

  console.log("Seeding finished successfully! 🚀");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
