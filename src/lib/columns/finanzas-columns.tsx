import { ColumnDef } from "@tanstack/react-table"
// Column creation helper
import {makeColumn} from "@/lib/column-helpers"
// This type is used to define the shape of our data.
import { FinanzasPersonales } from "@/lib/types/models"

// This defines the columns of the table.
export const FinanzasPersonalesColumns: ColumnDef<FinanzasPersonales>[] = [
    makeColumn<FinanzasPersonales>({
        key: "DESCRIPCION_OTROS_INGRESOS",
        label: "Descripción de otros ingresos",
        type: "string",
    }),
    makeColumn<FinanzasPersonales>({
        key: "INGRESOS_OTROS",
        label: "Otros ingresos",
        type: "number",
    }),
    makeColumn<FinanzasPersonales>({
        key: "INGRESOS_ARRIENDOS",
        label: "Ingresos de arriendos",
        type: "number",
    }),
    makeColumn<FinanzasPersonales>({
        key: "INGRESOS_HONORARIOS",
        label: "Ingresos de honorarios",
        type: "number",
    }),
    makeColumn<FinanzasPersonales>({
        key: "INGRESOS_RENDIMIENTOS",
        label: "Ingresos de rendimientos",
        type: "number",
    }),
    makeColumn<FinanzasPersonales>({
        key: "ACTIVOS_INMUEBLES",
        label: "Activos inmuebles",
        type: "number",
    }),
    makeColumn<FinanzasPersonales>({
        key: "ACTIVOS_INVERSIONES",
        label: "Activos inversiones",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "ACTIVOS_OTROS",
        label: "Otros activos",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "ACTIVOS_VEHICULOS",
        label: "Activos vehículos",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "PASIVOS_OTROS",
        label: "Otros pasivos",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "GASTOS_CREDITOS",
        label: "Gastos créditos",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "GASTOS_HIPOTECA",
        label: "Gastos hipoteca",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "GASTOS_OTROS",
        label: "Otros gastos",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "GASTOS_FAMILIARES",
        label: "Gastos familiares",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "GASTOS_ARRENDAMIENTO",
        label: "Gastos arrendamiento",
        type: "number",
    }),
        makeColumn<FinanzasPersonales>({
        key: "APORTES",
        label: "Aportes",
        type: "number",
    }),
    ]