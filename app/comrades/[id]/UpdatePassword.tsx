"use client";
import { changePassword } from "@/actions/users";
import { useState } from "react";

export const UpdatePassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setError(null);
    setSuccess(null);
    const formData = new FormData(formElement);
    const res = await changePassword(formData);
    if (res?.error) {
      setError(res.error);
    } else if (res?.success) {
      setSuccess(res.success);
      formElement.reset();
    }
  };
  const updatePasswordForm = () => {
    setVisible(!visible);
  };
  return (
    <main className="flex flex-col items-center m-2">
      <button
        onClick={updatePasswordForm}
        className="p-4 text-white bg-accent rounded-xl"
      >
        Update Password?
      </button>
      {visible && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 w-full max-w-sm p-6 bg-surface border border-surface-border rounded-2xl"
        >
          <h2 className="text-lg font-bold">Change Password</h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-content-muted">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              required
              className="p-2 border rounded-xl bg-background text-content"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-content-muted">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              required
              className="p-2 border rounded-xl bg-background text-content"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-content-muted">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="p-2 border rounded-xl bg-background text-content"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2 bg-accent text-white rounded-xl font-medium transition active:scale-95"
          >
            Update Password
          </button>
        </form>
      )}
    </main>
  );
};
