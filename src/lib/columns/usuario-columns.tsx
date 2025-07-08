import { ColumnDef } from "@tanstack/react-table"
// Column creation helper.
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
  makeColumn<Usuario>({ key: "ID", label: "ID", type: "number" }),
  makeColumn<Usuario>({ key: "TIPO_IDENTIFICACION", label: "Tipo de identificación" }),
  makeColumn<Usuario>({ key: "ACTA_INGRESO", label: "Acta de ingreso" }),
  makeColumn<Usuario>({ key: "IDENTIFICACION", label: "Identificación" }),
  makeColumn<Usuario>({ key: "ESTADO_CIVIL", label: "Estado civil" }),
  makeColumn<Usuario>({ key: "PAIS_NACIMIENTO", label: "País de nacimiento" }),
  makeColumn<Usuario>({ key: "RAZONSOCIAL", label: "Razón social" }),
  makeColumn<Usuario>({ key: "PERSONAS_A_CARGO", label: "Personas a cargo", type: "number" }),
  makeColumn<Usuario>({ key: "DEPARTAMENTO_NACIMIENTO", label: "Departamento de nacimiento" }),
  makeColumn<Usuario>({ key: "GENERO", label: "Género" }),
  makeColumn<Usuario>({ key: "ADDRESSLINE_MAIL", label: "Email" }),
  makeColumn<Usuario>({ key: "MUNICIPIO_NACIMIENTO", label: "Municipio de nacimiento" }),
  makeColumn<Usuario>({ key: "PAIS_IDENTIFICACION", label: "País de identificación" }),
  makeColumn<Usuario>({ key: "DIRECCION_RESIDENCIA", label: "Dirección de residencia" }),
  makeColumn<Usuario>({ key: "TIPO_VIVIENDA", label: "Tipo de vivienda" }),
  makeColumn<Usuario>({ key: "LUGAR_EXPEDICION", label: "Lugar de expedición" }),
  makeColumn<Usuario>({ key: "PAIS_RESIDENCIA", label: "País de residencia" }),
  makeColumn<Usuario>({ key: "ESTRATO", label: "Estrato", type: "number" }),
  makeColumn<Usuario>({
    key: "FECHA_NACIMIENTO",
    label: "Fecha de nacimiento",
    type: "date",
  }),
  makeColumn<Usuario>({ key: "DEPARTAMENTO_RESIDENCIA", label: "Departamento de residencia" }),
  makeColumn<Usuario>({ key: "OCUPACION", label: "Ocupación" }),
  makeColumn<Usuario>({
    key: "FECHA_INGRESO",
    label: "Fecha de ingreso",
    type: "date",
  }),
  makeColumn<Usuario>({ key: "CIUDAD_RESIDENCIA", label: "Ciudad de residencia" }),
  makeColumn<Usuario>({ key: "NIVEL_ACADEMICO", label: "Nivel académico" }),
  makeColumn<Usuario>({ key: "EDAD", label: "Edad", type: "number" }),
  makeColumn<Usuario>({ key: "ADDRESSLINE_CELULAR", label: "Celular" }),
  makeColumn<Usuario>({ key: "CODIGO_VERIFICACION", label: "Código de verificación" }),
  makeColumn<Usuario>({ key: "CLIENTE", label: "Cliente", type: "boolean" }),
  makeColumn<Usuario>({ key: "TERCERO", label: "Tercero", type: "boolean" }),
  makeColumn<Usuario>({ key: "CODEUCOR_NA", label: "Código Eucor" }),
  makeColumn<Usuario>({ key: "EMPLEADO", label: "Empleado", type: "boolean" }),
  makeColumn<Usuario>({ key: "ASOCIADO", label: "Asociado", type: "boolean" }),
  makeColumn<Usuario>({ key: "PROVEEDOR", label: "Proveedor", type: "boolean" }),
  makeColumn<Usuario>({ key: "PRIMER_NOMBRE", label: "Primer nombre" }),
  makeColumn<Usuario>({ key: "SEGUNDO_NOMBRE", label: "Segundo nombre" }),
  makeColumn<Usuario>({ key: "PRIMER_APELLIDO", label: "Primer apellido" }),
  makeColumn<Usuario>({ key: "SEGUNDO_APELLIDO", label: "Segundo apellido" }),
  makeColumn<Usuario>({ key: "SUCURSAL", label: "Sucursal" }),
  makeColumn<Usuario>({ key: "ESTADO", label: "Estado" }),
  makeColumn<Usuario>({
    key: "ULTIMA_ACTUALIZACION",
    label: "Última actualización",
    type: "date",
  }),
  makeColumn<Usuario>({ key: "NACIONALIDAD", label: "Nacionalidad" }),
  makeColumn<Usuario>({ key: "NUMERO_HIJOS", label: "Número de hijos", type: "number" }),
  makeColumn<Usuario>({ key: "MAXIMO_TITULO", label: "Máximo título" }),
  makeColumn<Usuario>({ key: "CONYUGUE", label: "Cónyuge" }),
]