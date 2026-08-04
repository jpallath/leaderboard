"use client";
import { useState } from "react";
import { UserProps } from "../types";
import { UserListItem } from "./UserListItem";
import { useUserFunctions } from "@/hooks/useUserFunctions";

type UserListProps = {
  users: UserProps[];
};

export const UserList = ({ users }: UserListProps) => {
  const { activeId, userFunction } = useUserFunctions();
  return (
    <ul>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          active={activeId === user.id}
          userFunction={userFunction}
        />
      ))}
    </ul>
  );
};

// i want to add a reset process here so that i can make passwords easier. thats it for now
