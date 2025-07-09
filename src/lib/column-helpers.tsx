// This makes creating data table columns easier.
// It allow the definition of a label and a type, and fills "header", "cell" and "filterFn" accordingly.

import { ColumnDef } from "@tanstack/react-table"
import { Row } from "@tanstack/react-table"

// Predefined header with a dropdown menu for sorting.
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

import { FilterFn } from "@tanstack/react-table"

export type ColumnType = "string" | "number" | "boolean" | "date"

const defaultFilterFns: Record<ColumnType, FilterFn<unknown>> = {
  string: (row, columnId, filterValue) => {
    const cell = String(row.getValue(columnId) ?? "").toLowerCase()

    if (Array.isArray(filterValue)) {
      return filterValue.some((v) =>
        cell.includes(String(v).toLowerCase())
      )
    }

    return cell.includes(String(filterValue).toLowerCase())
  },
  number: (row, columnId, filterValue) => {
    const value = String(row.getValue<number>(columnId));
    return value.includes(String(filterValue));
  },
  boolean: (row, columnId, filterValue) => {
    const cell = row.getValue(columnId)
    return String(cell) === String(filterValue)
  },
  date: (row, columnId, filterValue) => {
    const cell = new Date(row.getValue(columnId))
    const input = new Date(filterValue as string)
    return (
      !isNaN(cell.getTime()) &&
      !isNaN(input.getTime()) &&
      cell.toDateString() === input.toDateString()
    )
  },
}

interface MakeColumnOptions<TData> {
  key: keyof TData
  label: string
  type?: ColumnType
  cell?: (info: { row: Row<TData> }) => React.ReactNode
  filterFn?: FilterFn<TData>
  sortable?: boolean
  enableHiding?: boolean
}

export function makeColumn<TData, TValue = unknown>(
  options: MakeColumnOptions<TData>
): ColumnDef<TData, TValue> {
  const key = options.key as string;
  const type = options.type ?? "string"

  return {
    accessorKey: options.key as string,
    header: ({ column }) => {
      return DataTableColumnHeader({ column, title: options.label });
    },
    enableSorting: options.sortable ?? true,
    enableHiding: options.enableHiding ?? true,
    meta: {
      label: options.label,
      type: options.type ?? "string",
    },
    cell:
  options.cell ??
    ((info) => {
      const value = info.row.getValue(key);

      // Displays unavailable data in a muted color.
      const wrap = (content: string) =>
        content === "No disponible" ? (
          <span className="text-muted-foreground/40">{content}</span>
        ) : (
          content
        );

      // Displays data according to its type, null or undefined values ​​are changed to "No disponible".
      switch (type) {
        case "date": {
          const date = value instanceof Date ? value : new Date(value as string);
          return wrap(
            isNaN(date.getTime())
              ? "No disponible"
              : date.toLocaleDateString("es-CO")
          );
        }
        case "boolean":
          return wrap(
            value === true
              ? "Sí"
              : value === false
              ? "No"
              : "No disponible"
          );
        case "number":
          return wrap(
            value !== null && value !== undefined
              ? (value as number).toString()
              : "No disponible"
          );
        case "string":
          return wrap(String(value ?? "No disponible"));
        default:
          return wrap(String(value ?? "No disponible"));
      }
    }),
    filterFn: options.filterFn ?? (defaultFilterFns[(type)] as FilterFn<TData>),
    enableColumnFilter: true,
  }
}