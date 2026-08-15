import { CurrentUserProps } from "@/app/types";
import Link from "next/link";
import { logoutUser } from "@/actions/auth";
export const UserNavigation = ({
  username,
  name,
  id,
  userType,
}: CurrentUserProps) => {
  const compareUsertypes = (userType: string, requiredTypes: string[]) => {
    if (requiredTypes.some((ty) => ty == userType)) {
      return true;
    }
    return false;
  };
  return (
    <div className="w-full p-2 mb-6 flex flex-col bg-surface border-solid border-surface-border border-2 rounded-2xl">
      <h1 className="text-lg font-black text-center">
        Welcome back,{" "}
        <Link href={`/comrades/${id}`} className="text-accent">
          {name || username}
        </Link>
        !
      </h1>
      <div className="flex items-center gap-2 justify-center">
        <Link
          href={"/meets"}
          className="text-xs text-accent hover:text-accent font-medium transition p-2"
        >
          All Meets
        </Link>
        {compareUsertypes(userType, ["core", "admin"]) && (
          <Link
            href={"/meets/new"}
            className="text-xs text-accent hover:text-accent font-medium transition p-2"
          >
            New Meet
          </Link>
        )}
        {compareUsertypes(userType, ["admin"]) && (
          <Link
            href={"/admin"}
            className="text-xs text-accent hover:text-accent font-medium transition p-2"
          >
            Admin Ops
          </Link>
        )}
        <form action={logoutUser}>
          <button className="text-xs text-content-muted hover:text-accent font-medium transition p-2">
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};
