import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
import { DireccionUsuario } from "@/lib/types/models"
// Column creation helper
import { makeColumn } from "@/lib/column-helpers"

// This defines the columns of the table.
export const DireccionColumns: ColumnDef<DireccionUsuario>[] = [
    makeColumn<DireccionUsuario>({
        key: "TIPO_ZONA",
        label: "Tipo de zona",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "DIRECCION_RESIDENCIA",
        label: "Dirección de residencia",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "CIUDAD_RESIDENCIA",
        label: "Ciudad de residencia",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "DEPARTAMENTO_RESIDENCIA",
        label: "Departamento de residencia",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "PAIS_RESIDENCIA",
        label: "País de residencia",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "DIRECCION_LABORAL",
        label: "Dirección laboral",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "CIUDAD_LABORAL",
        label: "Ciudad laboral",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "DEPARTAMENTO_LABORAL",
        label: "Departamento laboral",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "PAIS_LABORAL",
        label: "País laboral",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "TELEFONO",
        label: "Teléfono",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "TELEFONO_LABORAL",
        label: "Teléfono laboral",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "TELEFONO_RESIDENCIA",
        label: "Teléfono residencia",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "ADDRESSLINE_CELULAR",
        label: "Celular",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "ADDRESSLINE_MAIL",
        label: "Email",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "BANCO_CTA_EXT",
        label: "Banco cuenta exterior",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "NRO_CTA_EXT",
        label: "Número cuenta exterior",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "PAIS_CTA_EXT",
        label: "País cuenta exterior",
        type: "string",
    }),
    makeColumn<DireccionUsuario>({
        key: "MANEJA_CTA_EN_MONEDA_EXTRANJERA",
        label: "¿Cuenta en moneda extranjera?",
        type: "boolean",
        cell: ({ row }) => row.getValue("MANEJA_CTA_EN_MONEDA_EXTRANJERA") ? "Sí" : "No",
    }),
]