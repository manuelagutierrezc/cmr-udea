import { ColumnDef } from "@tanstack/react-table"
// Column creation helper
import {makeColumn} from "@/lib/column-helpers"
// This type is used to define the shape of our data.
import { Empleo } from "@/lib/types/models"

// This defines the columns of the table.
export const EmpleoColumns: ColumnDef<Empleo>[] = [
    makeColumn<Empleo>({
        key: "IDENTIFICACION_COMPANIA",
        label: "Identificación de la compañía",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "NOMBRE_COMPANIA",
        label: "Nombre de la compañía",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "EMPLEO_PRINCIPAL",
        label: "¿Empleo principal?",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "CARGO_OFICIO",
        label: "Cargo u oficio",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "CODIGO_CIIU",
        label: "Código CIIU",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "DESCRIPCION_CIIU",
        label: "Descripción CIIU",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "RELACION_LABORAL",
        label: "Relación laboral",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "VINCULO_LABORAL",
        label: "Vínculo laboral",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "ESTADO_LABORAL",
        label: "Estado laboral",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "TIPO_CONTRATO",
        label: "Tipo de contrato",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "TIPO_SALARIO",
        label: "Tipo de salario",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "SALARIO",
        label: "Salario",
        type: "number",
        cell: ({ row }) => {
        const value = row.getValue<number>("SALARIO")
        return value?.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
        }) ?? "-"
        },
    }),
    makeColumn<Empleo>({
        key: "FRECUENCIA_PAGO",
        label: "Frecuencia de pago",
        type: "string",
    }),
    makeColumn<Empleo>({
        key: "FORMA_PAGO",
        label: "Forma de pago",
        type: "string",
    }),
    ]