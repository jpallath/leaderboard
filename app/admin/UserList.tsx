"use client";
import { UserProps } from "../types";

type UserListProps = {
  users: UserProps[];
};

type UserListItemProps = {
  user: UserProps;
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return <div>{user.name ? user.name : user.username}</div>;
};
