import { TableColumn, TableRow } from "@/assets/types/globals";
import { useRouter } from "next/navigation";

export default function Row({
  row,
  columns,
}: {
  row: TableRow;
  columns: TableColumn[];
}) {
  const router = useRouter();

  return (
    <tr
      className="border-b-[1px] border-b-gray border-solid hover:bg-gray-50 cursor-pointer"
      onClick={() => router.push(`/profile/${row.id}`)}
    >
      {columns.map((column) => (
        <td className="py-4" key={column.label}>
          {column.data(row, column)}
        </td>
      ))}
    </tr>
  );
}
