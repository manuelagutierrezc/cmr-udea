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

import { DataTableColumnHeader } from "@/components/data-table-column-header"

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
  {
    accessorKey: "ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    )
  },
  {
    accessorKey: "IDENTIFICACION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IDENTIFICACION" />
    ),
  },
  {
    accessorKey: "TIPO_IDENTIFICACION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TIPO_IDENTIFICACION" />
    ),
  },
  {
    accessorKey: "PRIMER_NOMBRE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PRIMER_NOMBRE" />
    ),
  },
  {
    accessorKey: "PRIMER_APELLIDO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PRIMER_APELLIDO" />
    ),
  },
  {
    accessorKey: "EDAD",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EDAD" />
    ),
  },
  {
    accessorKey: "CLIENTE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CLIENTE" />
    ),
  },
  {
    accessorKey: "EMPLEADO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EMPLEADO" />
    ),
  },
  {
    accessorKey: "FECHA_NACIMIENTO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="FECHA_NACIMIENTO" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("FECHA_NACIMIENTO")
      return date.toLocaleDateString("es-ES")
    },
  },
  {
    accessorKey: "FECHA_INGRESO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="FECHA_INGRESO" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("FECHA_INGRESO")
      return date.toLocaleDateString("es-ES")
    },
  },
  {
    accessorKey: "ACTA_INGRESO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ACTA_INGRESO" />
    ),
  },
  {
    accessorKey: "ESTADO_CIVIL",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ESTADO_CIVIL" />
    ),
  },
  {
    accessorKey: "PERSONAS_A_CARGO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PERSONAS_A_CARGO" />
    ),
  },
  {
    accessorKey: "GENERO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="GENERO" />
    ),
  },
  {
    accessorKey: "ESTADO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ESTADO" />
    ),
  },
  {
    accessorKey: "PAIS_NACIMIENTO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PAIS_NACIMIENTO" />
    ),
  },
  {
    accessorKey: "DEPARTAMENTO_NACIMIENTO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DEPARTAMENTO_NACIMIENTO" />
    ),
  },
  {
    accessorKey: "MUNICIPIO_NACIMIENTO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MUNICIPIO_NACIMIENTO" />
    ),
  },
  {
    accessorKey: "PAIS_IDENTIFICACION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PAIS_IDENTIFICACION" />
    ),
  },
  {
    accessorKey: "PAIS_RESIDENCIA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PAIS_RESIDENCIA" />
    ),
  },
  {
    accessorKey: "DEPARTAMENTO_RESIDENCIA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DEPARTAMENTO_RESIDENCIA" />
    ),
  },
  {
    accessorKey: "CIUDAD_RESIDENCIA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CIUDAD_RESIDENCIA" />
    ),
  },
  {
    accessorKey: "DIRECCION_RESIDENCIA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DIRECCION_RESIDENCIA" />
    ),
  },
  {
    accessorKey: "ESTRATO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ESTRATO" />
    ),
  },
  {
    accessorKey: "OCUPACION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="OCUPACION" />
    ),
  },
  {
    accessorKey: "NIVEL_ACADEMICO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="NIVEL_ACADEMICO" />
    ),
  },
  {
    accessorKey: "TIPO_VIVIENDA",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TIPO_VIVIENDA" />
    ),
  },
  {
    accessorKey: "ADDRESSLINE_MAIL",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ADDRESSLINE_MAIL" />
    ),
  },
  {
    accessorKey: "ADDRESSLINE_CELULAR",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ADDRESSLINE_CELULAR" />
    ),
  },
  {
    accessorKey: "LUGAR_EXPEDICION",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="LUGAR_EXPEDICION" />
    ),
  },
  {
    accessorKey: "RAZONSOCIAL",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="RAZONSOCIAL" />
    ),
  },
]