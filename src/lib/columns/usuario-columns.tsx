import { ColumnDef } from "@tanstack/react-table"
// Column creation helper
import {makeColumn} from "@/lib/column-helpers"
// This type is used to define the shape of our data.
import { Usuario } from "@/lib/types/models"
// Imports for the actions column.
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button" 

// This defines the columns of the table.
export const UsuarioColumns: ColumnDef<Usuario>[] = [
  {
    //This is the actions column, clicking the button will open a new tab with the user's details.
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.ID

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => {
              window.open(`/empleado/asociados/${id}`, "_blank")
            }}
        >
          <span className="sr-only">Abrir menu</span>
          <Search className="h-4 w-4"/>
        </Button>
      )
    },
  },
  makeColumn<Usuario>({
    key: "ID",
    label: "ID",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "IDENTIFICACION",
    label: "Identificación",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "TIPO_IDENTIFICACION",
    label: "Tipo de identificación",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "PRIMER_NOMBRE",
    label: "Primer nombre",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "PRIMER_APELLIDO",
    label: "Primer apellido",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "EDAD",
    label: "Edad",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "CLIENTE",
    label: "Cliente",
    type: "boolean",
  }),
  makeColumn<Usuario>({
    key: "EMPLEADO",
    label: "Empleado",
    type: "boolean",
  }),
  makeColumn<Usuario>({
    key: "FECHA_NACIMIENTO",
    label: "Fecha de nacimiento",
    type: "date",
    cell: ({ row }) => {
      const date: Date = row.getValue("FECHA_NACIMIENTO")
      return date.toLocaleDateString("es-ES")
    },
  }),
  makeColumn<Usuario>({
    key: "FECHA_INGRESO",
    label: "Fecha de ingreso",
    type: "date",
    
  }),
  makeColumn<Usuario>({
    key: "ACTA_INGRESO",
    label: "Acta de ingreso",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "ESTADO_CIVIL",
    label: "Estado civil",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "PERSONAS_A_CARGO",
    label: "Personas a cargo",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "GENERO",
    label: "Género",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "ESTADO",
    label: "Estado",
    type: "boolean",
    cell: ({ row }) => (row.getValue("ESTADO") ? "Activo" : "Inactivo"),
  }),
  makeColumn<Usuario>({
    key: "PAIS_NACIMIENTO",
    label: "País de nacimiento",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "DEPARTAMENTO_NACIMIENTO",
    label: "Departamento de nacimiento",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "MUNICIPIO_NACIMIENTO",
    label: "Municipio de nacimiento",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "PAIS_IDENTIFICACION",
    label: "País de identificación",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "PAIS_RESIDENCIA",
    label: "País de residencia",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "DEPARTAMENTO_RESIDENCIA",
    label: "Departamento de residencia",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "CIUDAD_RESIDENCIA",
    label: "Ciudad de residencia",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "DIRECCION_RESIDENCIA",
    label: "Dirección de residencia",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "ESTRATO",
    label: "Estrato",
    type: "number",
  }),
  makeColumn<Usuario>({
    key: "OCUPACION",
    label: "Ocuáción",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "NIVEL_ACADEMICO",
    label: "Nivel académico",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "TIPO_VIVIENDA",
    label: "Tipo de vivienda",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "ADDRESSLINE_MAIL",
    label: "Email",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "ADDRESSLINE_CELULAR",
    label: "Celular",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "LUGAR_EXPEDICION",
    label: "Lugar de expedición",
    type: "string",
  }),
  makeColumn<Usuario>({
    key: "RAZONSOCIAL",
    label: "Razón social",
    type: "string",
  }),
]