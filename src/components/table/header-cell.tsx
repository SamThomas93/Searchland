// Types
import type { TableColumn } from "@/assets/types/globals";

export default function HeaderCell({ column }: { column: TableColumn }) {
  return <th className="text-left py-4">{column.label}</th>;
}
