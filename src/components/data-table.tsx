"use client"

import * as React from "react" // For sorting.
 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel, // For pagination.
  SortingState, // For sorting.
  getSortedRowModel, // For sorting.
  ColumnFiltersState, // For filtering.
  getFilteredRowModel, // For filtering.
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Button } from "@/components/ui/button" // For pagination.
import { Input } from "@/components/ui/input" // For filtering.

// For filtering options.
import { ListFilter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { DataTableViewOptions } from "@/components/data-table-view-options"

 
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
 
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]) // For sorting.
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>( // For filtering.
    []
  )
  const [filterColumn, setFilterColumn] = React.useState("ID"); // For filtering options.

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // For pagination.
    getPaginationRowModel: getPaginationRowModel(),
    //For sorting.
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // For filtering.
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    }
  })
 
  return (
    <div>
      <div className="flex items-center py-4">
        {/* Dropdown menu for filtering options. */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center">
              <ListFilter className="h-4 w-4 mr-2" />
              <p className="mx-2">Filtrar por:</p>
              <Button variant="outline" className="mx-2">
                {table.getColumn(filterColumn)?.columnDef.meta?.label ?? filterColumn}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((col) => col.getCanFilter())
              .map((col) => (
                <DropdownMenuItem
                  key={col.id}
                  className="first-letter:uppercase"
                  onClick={() => setFilterColumn(col.id)}
                >
                  {col.columnDef.meta?.label ?? col.id}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Input for filtering. */}
        <Input
          placeholder="Filtrar..."
          value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)
          }
          className="max-w-sm mx-2"
        />
        {/* Component for column visibility options. */}
        <DataTableViewOptions table={table} />
      </div>
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}