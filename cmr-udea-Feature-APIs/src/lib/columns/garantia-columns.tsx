import { ColumnDef } from "@tanstack/react-table"
// Column creation helper
import {makeColumn} from "@/lib/column-helpers"
// This type is used to define the shape of our data.
import { Garantia } from "@/lib/types/models"

// This defines the columns of the table.
export const GarantiaColumns: ColumnDef<Garantia>[] = [
    makeColumn<Garantia>({
        key: "Garantia",
        label: "Valor de la Garantía",
        type: "number",
    }),
    makeColumn<Garantia>({
        key: "FechaAvaluo",
        label: "Fecha de Avaluó",
        type: "date",
    }),
    makeColumn<Garantia>({
        key: "Deterioro",
        label: "Deterioro",
        type: "number",
    }),
    makeColumn<Garantia>({
        key: "DeterioroInteres",
        label: "Deterioro por Interés",
        type: "number",
    }),
    makeColumn<Garantia>({
        key: "Contingencia",
        label: "Contingencia",
        type: "number",
    }),
]