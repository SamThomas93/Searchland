import { twMerge } from "tailwind-merge";

export default function TextArea({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-2" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        className={twMerge(
          "border-[1px] border-solid border-grey w-full rounded-[5px] min-h-10 px-3 py-2  focus:outline-primaryGreen",
          error ? "border-red-600 border-2 border-solid" : "",
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={8}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : ""}
    </div>
  );
}
