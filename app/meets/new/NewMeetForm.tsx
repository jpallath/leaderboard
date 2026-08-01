"use client";
import { CurrentUserWithoutMeetsProps } from "@/app/types";
import { useNewMeet } from "@/hooks/useNewMeet";

export const NewMeetForm = ({
  currentUser,
}: {
  currentUser: CurrentUserWithoutMeetsProps;
}) => {
  const {
    locationValue,
    setLocationValue,
  
    formAction,
    today,
    defaultMeetName,
  } = useNewMeet(currentUser);

  return (
    <main className="flex flex-col justify-between mt-2">
      <form
        action={formAction}
        className="flex flex-col gap-4 p-4 border-solid border-2 border-surface-border mt-2 rounded-xl"
      >
        <label>
          Meet Name
          <input
            defaultValue={defaultMeetName}
            type="text"
            name="meetName"
            required
            className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
          />
        </label>

        <label className="block space-y-1">
          <span className="block text-xs font-semibold uppercase tracking-wider text-content-muted">
            Location
          </span>
          <div className="relative w-full">
            <select
              name="location"
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
              className="w-full appearance-none rounded-xl bg-background border border-surface-border px-4 py-3 pr-10 text-content text-sm focus:outline-none focus:border-accent transition cursor-pointer text-left"
            >
              <option value="prospect-morning">
                Prospect Park Morning Loop
              </option>
              <option value="prospect-evening">
                Prospect Park Evening Loop
              </option>
              <option value="riverside">Riverside Evening Run</option>
              <option value="sunset">Sunset Park Lap</option>
              <option value="central-park">Central Park Run</option>
              <option value="chinatown">Chinatown Office Loop</option>
              <option value="queens">Queens</option>
              <option value="custom">Custom</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-content-muted">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </label>

        {locationValue === "custom" && (
          <label className="block space-y-1">
            <span className="block text-xs font-semibold uppercase tracking-wider text-content-muted">
              Custom Location Name
            </span>
            <input
              type="text"
              name="customLocation"
              placeholder="Enter custom location..."
              required
              className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
            />
          </label>
        )}

        <label>
          Date
          <input
            type="date"
            name="date"
            defaultValue={today}
            required
            className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
          />
        </label>
        <button className="bg-accent border-accent rounded-xl text-white p-4">
          Set Meet
        </button>
      </form>
    </main>
  );
};
