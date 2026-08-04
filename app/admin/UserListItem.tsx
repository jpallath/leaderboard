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
      <div>
        <h2 className="text-lg">{user.name ? user.name : user.username}</h2>
      </div>
      <div
        className={`p-2 flex justify-center items-center ${active ? "opacity-100 w-full h-10 border-solid border border-surface-border" : "opacity-0 w-0 h-0 "}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            resetPassword(user.id);
          }}
        >
          Reset Password
        </button>
      </div>
    </li>
  );
};
