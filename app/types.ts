import { UserType } from "@/prisma/generated/client";

export type CurrentUserProps = {
  id?: number;
  username: string;
  name: string | null;
  userType: string;
  meets?: {
    id: number;
    userId: number;
    meetId: number;
    meet: MeetProps;
  }[];
  leaders?: {
    id: number;
    username: string;
    name: string;
    totalPoints: number;
    place: number;
  }[];
};

export type UserProps = {
  username: string;
  id: number;
  name?: string | null;
};

export type MeetProps = {
  id: number;
  name: string;
  date: Date | string;
  points: number;
  location: string;
  attendees?: any[];
  ind?: number;
};

export type CurrentUserWithoutMeetsProps = {
  id: number;
  username: string;
  name: string | null;
  userType: string;
};

export type LeaderboardProps = {
  leaders?: {
    id: number;
    username: string;
    name: string;
    totalPoints: number;
    place: number;
  }[];
};

export type LeaderItemProps = {
  id: number;
  username: string;
  name: string;
  totalPoints: number;
  place: number;
};

export type RunnerWithMeet = {
  user: {
    id: number;
    name: string | null;
    username: string;
  };
  userMeet: {
    id: number;
    verified: boolean;
  };
};

export type VerifyRunnersProps = {
  verifiedRunners: RunnerWithMeet[];
  unverifiedRunners: RunnerWithMeet[];
  meet: MeetProps;
};
export type VerifyRunnerItemProp = {
  runner: RunnerWithMeet;
  meet: MeetProps;
  animation?: boolean;
};
