"use client"

import { ColumnDef } from "@tanstack/react-table"

// Imports for the dropdown menu in actions column.
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button" 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Column creation helper
import {makeColumn} from "@/lib/column-helpers"

// This type is used to define the shape of our data.
export type Usuario = {
  ID: number
  IDENTIFICACION: number
  TIPO_IDENTIFICACION: "CC" | "NRO DE NIT"
  PRIMER_NOMBRE: string
  PRIMER_APELLIDO: string
  EDAD: number
  CLIENTE: boolean
  EMPLEADO: boolean
  FECHA_NACIMIENTO: Date
  FECHA_INGRESO: Date
  ACTA_INGRESO: number
  ESTADO_CIVIL: "SOLTERO" | "CASADO" | "DIVORCIADO"
  PERSONAS_A_CARGO: number
  GENERO: "MASCULINO" | "FEMENINO" | "OTRO"
  ESTADO: "ACTIVO" | "INACTIVO"
  PAIS_NACIMIENTO: string
  DEPARTAMENTO_NACIMIENTO: string
  MUNICIPIO_NACIMIENTO: string
  PAIS_IDENTIFICACION: string
  PAIS_RESIDENCIA: string
  DEPARTAMENTO_RESIDENCIA: string
  CIUDAD_RESIDENCIA: string
  DIRECCION_RESIDENCIA: string
  ESTRATO: number
  OCUPACION: string
  NIVEL_ACADEMICO: "BACHILLER" | "TÉCNICO" | "UNIVERSITARIO" | "POSGRADO"
  TIPO_VIVIENDA: "PROPIA" | "ARRENDADA"
  ADDRESSLINE_MAIL: string
  ADDRESSLINE_CELULAR: number
  LUGAR_EXPEDICION: string
  RAZONSOCIAL: string
}

// This defines the columns of the table.
export const columns: ColumnDef<Usuario>[] = [
  {
    //This is the actions column, it includes a dropdown menu.
    id: "actions",
    cell: () => {
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <Search className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Detalles</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver cartera de crédito</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
    label: "email",
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