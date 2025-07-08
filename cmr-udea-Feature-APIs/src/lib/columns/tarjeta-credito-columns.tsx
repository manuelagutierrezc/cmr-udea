import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
import { TarjetaCredito } from "@/lib/types/models"
// Column creation helper
import { makeColumn } from "@/lib/column-helpers"

// This defines the columns of the table.
export const TarjetaCreditoColumns: ColumnDef<TarjetaCredito>[] = [
    makeColumn<TarjetaCredito>({
        key: "TARJCREDCUPROT",
        label: "Tipo de Tarjeta",
        type: "string",
    }),
    makeColumn<TarjetaCredito>({
        key: "ENTOTORGARANT",
        label: "Entidad Otorgante",
        type: "string",
    }),
    ]