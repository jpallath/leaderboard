import { prisma } from "@/lib/prisma";
import { UpdatePassword } from "./UpdatePassword";
import { getCurrentUser } from "@/lib/auth";

type ComradePageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ mode?: string }>;
};

const ComradePage = async ({ params }: ComradePageProps) => {
  const { id } = await params;
  const comradeDetails = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: {
      meets: {
        include: {
          meet: true,
        },
        orderBy: {
          meet: {
            date: "desc", // Sorts the outer relation by the nested meet's date
          },
        },
      },
    },
  });

  const currentUser = await getCurrentUser();

  if (!comradeDetails) {
    return <div>Can't find user</div>;
  }

  if (!currentUser || currentUser.id !== comradeDetails.id) {
    return <div>No Access</div>;
  }

  const meets = comradeDetails.meets;

  return (
    <main className="flex flex-col gap-4">
      <UpdatePassword />
      <div className="w-full flex flex-col">
        <h1 className="text-2xl text-center font-bold text-accent">
          {comradeDetails.name || comradeDetails?.username}
        </h1>
        <ul className="text-xl font-bold">
          Attended Meets:
          {meets.map((meet, idx) => {
            return (
              <li
                className={`m-2 rounded-xl font-normal ${idx % 2 ? "text-white bg-accent border-accent border-2 border-solid" : "text-black bg-surface border-surface-border border-2 border-solid"}`}
                key={idx}
              >
                <h1>{meet.meet.name}</h1>
                <p>{meet.meet.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ComradePage;
