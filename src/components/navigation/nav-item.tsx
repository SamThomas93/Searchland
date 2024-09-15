import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { NavItem as NavItemType } from "@/assets/types/globals";

export default function NavItem({ navItem }: { navItem: NavItemType }) {
  return (
    <li>
      <Link
        className={twMerge(
          "flex text-white text-xl font-semibold",
          navItem.button &&
            "bg-primaryGreen px-3 py-1 rounded-[5px] text-darkSlateGrey",
        )}
        href={navItem.url}
      >
        {navItem.label}
      </Link>
    </li>
  );
}
