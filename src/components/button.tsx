"use client";

import { twMerge } from "tailwind-merge";

export default function Button({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={twMerge(
        "bg-gray-400 px-6 py-1 rounded-[5px] text-xl",
        className,
      )}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
