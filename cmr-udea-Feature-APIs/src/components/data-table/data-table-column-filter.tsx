"use client"

import * as React from "react"
import { Column } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import { Capitalize } from "@/lib/utils"

interface DataTableColumnFilterProps<TData, TValue> {
    column: Column<TData, TValue>
    title?: string
}

export function DataTableColumnFilter<TData, TValue>({
    column,
    title,
}: DataTableColumnFilterProps<TData, TValue>) {
    const selectedValues = new Set(column.getFilterValue() as string[] ?? [])

    const facetedValues = column.getFacetedUniqueValues()

    const valuesArray = Array.from(facetedValues?.keys() ?? [])

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
            <CirclePlus className="h-4 w-4" />
            {title ?? column.id}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
            <DropdownMenuLabel>Filtrar por {title ? title.toLowerCase() : column.id}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {valuesArray.length === 0 ? (
            <div className="px-2 py-1 text-sm text-muted-foreground">
                No hay datos para filtrar
            </div>
            ) : (
            valuesArray.map((value) => (
                <DropdownMenuCheckboxItem
                key={String(value)}
                checked={selectedValues.has(String(value))}
                onCheckedChange={(checked) => {
                    const newValues = new Set(selectedValues)
                    if (checked) {
                    newValues.add(String(value))
                    } else {
                    newValues.delete(String(value))
                    }
                    
                    // If no value is selected, delete filter
                    if (newValues.size === 0) {
                        column.setFilterValue(undefined)
                    } else {
                        column.setFilterValue(Array.from(newValues))
                    }
                }}
                >
                {Capitalize(String(value))}
                </DropdownMenuCheckboxItem>
            ))
            )}
        </DropdownMenuContent>
        </DropdownMenu>
    )
}