"use client";
export const NewPageForm = () => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <main>
      <form>
        <label>
          Event Name
          <input
            type="text"
            name="text"
            required
            className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
          />
        </label>
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
      </form>
    </main>
  );
};
