// TW  Merge
import { twMerge } from "tailwind-merge";

// Types
import type { FavouriteSelectItem } from "@/assets/types/globals";

function FavouriteSelectItem({
  option,
  onChange,
  active,
}: {
  option: FavouriteSelectItem;
  onChange: (value: string) => void;
  active: boolean;
}) {
  return (
    <button
      className={twMerge(
        "flex flex-col bg-gray-100 rounded-[5px] items-center justify-center py-6 border-2 border-solid focus:outline-primaryGreen",
        active && "border-primaryGreen",
      )}
      onClick={() => onChange(option.value)}
    >
      <span className="text-4xl mb-2">{option.icon}</span>
      <p>{option.label}</p>
    </button>
  );
}

export default function FavouriteSelect({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FavouriteSelectItem[];
  error?: string;
}) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-2">{label}</label>

      <div
        className={twMerge(
          "gap-6 grid grid-cols-3 md:grid-cols-4",
          error ? "border-red-600 border-2 border-solid rounded-[5px] p-3" : "",
        )}
      >
        {options.map((option) => (
          <FavouriteSelectItem
            option={option}
            key={option.value}
            onChange={onChange}
            active={value === option.value}
          />
        ))}
      </div>
    </div>
  );
}
