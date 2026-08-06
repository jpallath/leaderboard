export type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

export const InputField = ({
  label,
  type,
  name,
  placeholder,
}: InputFieldProps) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full rounded-xl bg-background border border-surface-border px-4 py-3 text-content text-sm focus:outline-none focus:border-accent transition"
    />
  </div>
);
