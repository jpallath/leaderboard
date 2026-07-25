export type CurrentUserProps = {
  id: number;
  username: string;
  name: string | null;
  userType: string;
  meets: {
    id: number;
    userId: number;
    meetId: number;
    meet: MeetProps;
  }[];
};

export type UserProps = {
  username: string;
  id: string;
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
