"use client"

import { ColumnDef, flexRender } from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DataCardProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData | TData[]
    title?: string
}

export function DataCard<TData, TValue>({ columns, data, title }: DataCardProps<TData, TValue>) {
    // Ensure data is always an array for consistent rendering
    const dataArray = Array.isArray(data) ? data : [data]

    // If data is empty or the first item has no keys, display a message
    if (!dataArray.length || Object.keys(dataArray[0] ?? {}).length === 0) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
            <Card>
                {title && (
                <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                )}
                <CardContent>
                <p className="text-sm text-muted-foreground">No hay datos disponibles.</p>
                </CardContent>
            </Card>
        </div>
        )
    }

    return (
        <div className={`${dataArray.length === 1 ? "max-w-lg" : "grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2"}`}>
            {dataArray.map((entry, index) => (
                <Card key={index}>
                {title && (
                    <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                )}
                <CardContent className="space-y-3">
                    {columns.map((column) => {
                    const label = column.meta?.label ?? column.accessorKey
                    const rawValue = entry[column.accessorKey as keyof TData]

                    const isEmpty =
                        rawValue === null ||
                        rawValue === undefined ||
                        (typeof rawValue === "string" && rawValue.trim().length === 0)

                    const cellContent = column.cell
                        ? flexRender(column.cell, {
                            row: {
                            getValue: (key: string) => entry[key as keyof TData],
                            },
                        })
                        : String(rawValue ?? "")

                    return (
                        <div key={String(column.accessorKey ?? label)} className="flex flex-col">
                        <span className="text-sm text-muted-foreground">{label}</span>
                        <span className={`text-base font-medium ${isEmpty ? "text-muted-foreground/40" : ""}`}>
                            {isEmpty ? "No disponible" : cellContent}
                        </span>
                        </div>
                    )
                    })}
                </CardContent>
                </Card>
            ))}
        </div>
    )
}