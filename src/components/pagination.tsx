import { PAGE_LIMIT } from "@/assets/data/constants";
import { twMerge } from "tailwind-merge";

function PaginationItem({
  item,
  setPage,
  active,
}: {
  item: number;
  setPage: (page: number) => void;
  active: boolean;
}) {
  const pageLabel = item + 1;

  return (
    <li onClick={() => setPage(item)}>
      <button
        className={twMerge(
          "w-12 h-12 bg-gray-100 flex justify-center items-center rounded-[5px]",
          active && "bg-primaryGreen text-white",
        )}
        aria-label={"Goto Page " + pageLabel}
      >
        {pageLabel}
      </button>
    </li>
  );
}

export default function Pagination({
  page,
  setPage,
  total,
}: {
  page: number;
  setPage: (page: number) => void;
  total: number;
}) {
  return (
    <nav
      className="flex flex-row items-center"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className="flex flex-row gap-6 py-6 mr-6">
        {[...new Array(Math.ceil(total / PAGE_LIMIT))].map((i, index) => (
          <PaginationItem
            item={index}
            key={index}
            setPage={setPage}
            active={page === index}
          />
        ))}
      </ul>
      <p>Total Users: {total}</p>
    </nav>
  );
}
