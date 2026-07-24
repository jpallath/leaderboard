export type CurrentUserProps = {
  username: string;
  name: string | null;
  meets: MeetProps[];
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
