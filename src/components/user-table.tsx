"use client";

import { useState } from "react";

// TRPC
import { trpc } from "@/utils/trpc";

// Data
import { favouriteAnimals, favouriteFoods } from "@/assets/data/favourites";
import { PAGE_LIMIT } from "@/assets/data/constants";

// Components
import Table from "@/components/table";
import Pagination from "@/components/pagination";

// Types
import type { TableColumn, TableRow } from "@/assets/types/globals";

export default function UserTable() {
  const [page, setPage] = useState(0);

  const users = trpc.getUsers.useQuery({ skip: page * PAGE_LIMIT });

  const columns: TableColumn[] = [
    {
      label: "First Name",
      data: (r: TableRow) => r.firstName,
      sortable: true,
    },
    {
      label: "Last Name",
      data: (r: TableRow) => r.lastName,
      sortable: true,
    },
    {
      label: "Favourite Food",
      data: (r: TableRow) => favouriteFoods[r.favouriteFood].icon,
      sortable: false,
    },
    {
      label: "Favourite Animal",
      data: (r: TableRow) => favouriteAnimals[r.favouriteAnimal].icon,
      sortable: false,
    },
  ];

  if (users.isLoading) {
    return (
      <div className="text-center py-6">
        <p className="text-xl text-darkSlateGrey">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Table columns={columns} rows={users.data?.users || []} />

      <Pagination
        page={page}
        setPage={setPage}
        total={users.data?.count || 0}
      />
    </>
  );
}
