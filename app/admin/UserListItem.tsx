import { useUserUpdates } from "@/hooks/useUserUpdates";
import { UserProps } from "../types";

type UserListItemProps = {
  user: UserProps;
  active: boolean;
  userFunction: (id: number) => void;
};
export const UserListItem = ({
  user,
  active,
  userFunction,
}: UserListItemProps) => {
  const { isPending, resetPassword } = useUserUpdates(user.id);
  return (
    <li
      className="flex flex-col"
      onClick={() => {
        userFunction(user.id);
      }}
    >
      <div
        className={`p-2 m-auto w-11/12 transition-all duration-300 ease-out ${active ? "border-t border-solid bg-accent text-white" : "border border-solid border-surface bg-surface text-black"}  rounded-xl flex flex-col`}
      >
        <h2 className="text-lg font-bold">
          {user.name ? user.name : user.username}
        </h2>
      </div>
      <div
        className={`p-2 m-1 flex justify-center items-center transition-all duration-300 ease-out ${active ? "opacity-100 w-full h-10" : "opacity-0 w-0 h-0 "}`}
      >
        <button
          className={`bg-accent text-white rounded-xl p-2 m-2`}
          onClick={(e) => {
            e.stopPropagation();
            resetPassword(user.id);
          }}
          disabled={isPending}
        >
          {isPending ? "..." : "Reset Password"}
        </button>
      </div>
    </li>
  );
};
