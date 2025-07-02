import { ColumnDef } from "@tanstack/react-table"
// Column creation helper
import {makeColumn} from "@/lib/column-helpers"
// This type is used to define the shape of our data.
import { pqr } from "@/lib/types/models"

// This defines the columns of the table.
export const PqrsColumns: ColumnDef<pqr>[] = [
        makeColumn<pqr>({
        key: "ID",
        label: "ID",
        type: "number",
    }),
    makeColumn<pqr>({
        key: "usuario_id",
        label: "ID Usuario",
        type: "number",
    }),
    makeColumn<pqr>({
        key: "tipoIdentificacion",
        label: "Tipo de Identificación",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "documentoIdentificacion",
        label: "Documento",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "email",
        label: "Email",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "tipoSolicitante",
        label: "Tipo de Solicitante",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "pais",
        label: "País",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "estado",
        label: "Estado",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "provincia",
        label: "Provincia",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "medioContacto",
        label: "Medio de Contacto",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "telefono",
        label: "Teléfono",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "movil",
        label: "Móvil",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "direccion",
        label: "Dirección",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "tipoSolicitud",
        label: "Tipo de Solicitud",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "servicio",
        label: "Servicio",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "titulo",
        label: "Título",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "descripcion",
        label: "Descripción",
        type: "string",
    }),
    makeColumn<pqr>({
        key: "adjunto",
        label: "Adjunto",
        type: "string",
        cell: ({ row }) => {
            const value = row.getValue("adjunto")
            return value ? "Archivo disponible" : "No adjunto" // Temporary it just display a message if no value is present, in the future it should link to the file.
        },
    }),
    makeColumn<pqr>({
        key: "createdAt",
        label: "Fecha de Creación",
        type: "date",
    }),
    makeColumn<pqr>({
        key: "updatedAt",
        label: "Fecha de Actualización",
        type: "date",
    }),
]