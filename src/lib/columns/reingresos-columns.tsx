import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
import { ReingresosUsuario } from "@/lib/types/models"
// Column creation helper
import { makeColumn } from "@/lib/column-helpers"

export const ReingresosColumns: ColumnDef<ReingresosUsuario>[] = [
    makeColumn<ReingresosUsuario>({
        key: "FECHA_REINGRESO",
        label: "Fecha de reingreso",
        type: "date",
    }),
    makeColumn<ReingresosUsuario>({
        key: "ACTA_REINGRESO",
        label: "Acta de reingreso",
        type: "string",
    }),
]