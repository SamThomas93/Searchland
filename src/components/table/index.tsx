// Components
import HeaderCell from "@/components/table/header-cell";
import Row from "@/components/table/row";

// Types
import type { TableColumn, TableRow } from "@/assets/types/globals";

export default function Table({
  rows,
  columns,
}: {
  rows: TableRow[];
  columns: TableColumn[];
}) {
  return (
    <table className="w-full">
      <tbody>
        <tr className="border-b-solid border-b-2 border-b-primaryGreen">
          {columns.map((column: TableColumn) => (
            <HeaderCell column={column} key={column.label} />
          ))}
        </tr>

        {rows.map((row: TableRow) => (
          <Row row={row} columns={columns} key={row.id} />
        ))}
      </tbody>
    </table>
  );
}
