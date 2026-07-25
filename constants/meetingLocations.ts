export enum MeetLocation {
  ProspectMorning = "prospect-morning",
  ProspectEvening = "prospect-evening",
  Riverside = "riverside",
  Sunset = "sunset",
  CentralPark = "central-park",
  Chinatown = "chinatown",
  Queens = "queens",
  Custom = "custom",
}

export const locationLabels: Record<string, string> = {
  [MeetLocation.ProspectMorning]: "Prospect Park Morning Loop",
  [MeetLocation.ProspectEvening]: "Prospect Park Evening Loop",
  [MeetLocation.Riverside]: "Riverside Evening Run",
  [MeetLocation.Sunset]: "Sunset Park Lap",
  [MeetLocation.CentralPark]: "Central Park Run",
  [MeetLocation.Chinatown]: "Chinatown Office Loop",
  [MeetLocation.Queens]: "Queens",
  [MeetLocation.Custom]: MeetLocation.Custom,
};
