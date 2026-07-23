export type CurrentUserProps = {
  username: string;
  name: string | null;
  meets: Meet[];
};

export type Meet = {
  id: number;
  name: string;
  date: Date | string;
  points: number;
  attendees?: any[];
};
