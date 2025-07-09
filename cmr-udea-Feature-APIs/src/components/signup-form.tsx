"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function SignUpForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter()
  const [form, setForm] = useState({
    ADDRESSLINE_MAIL: "",
    PASSWORD: "",
    IDENTIFICACION: "",
    TIPO_IDENTIFICACION: "CC",
    ACTA_INGRESO: "",
    ESTADO_CIVIL: "",
    PAIS_NACIMIENTO: "",
    RAZONSOCIAL: "",
    PERSONAS_A_CARGO: "",
    DEPARTAMENTO_NACIMIENTO: "",
    GENERO: "",
    MUNICIPIO_NACIMIENTO: "",
    PAIS_IDENTIFICACION: "",
    DIRECCION_RESIDENCIA: "",
    TIPO_VIVIENDA: "",
    LUGAR_EXPEDICION: "",
    PAIS_RESIDENCIA: "",
    ESTRATO: "",
    FECHA_NACIMIENTO: "",
    DEPARTAMENTO_RESIDENCIA: "",
    OCUPACION: "",
    FECHA_INGRESO: "",
    CIUDAD_RESIDENCIA: "",
    NIVEL_ACADEMICO: "",
    EDAD: "",
    ADDRESSLINE_CELULAR: ""
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      const payload = {
        ...form,
        PERSONAS_A_CARGO: parseInt(form.PERSONAS_A_CARGO),
        ESTRATO: parseInt(form.ESTRATO),
        EDAD: parseInt(form.EDAD),
        FECHA_NACIMIENTO: new Date(form.FECHA_NACIMIENTO),
        FECHA_INGRESO: new Date(form.FECHA_INGRESO),
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess("Usuario registrado exitosamente.")
      } else {
        setError(data.message || "Error en el registro.")
      }
    } catch (err) {
      setError("Error de red o del servidor.")
    }
  }

  const renderInput = (id: keyof typeof form, label: string, type = "text") => (
    <div className="grid gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} required value={form[id]} onChange={handleChange} />
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Registro de Usuario</h1>
        <p className="text-muted-foreground text-sm">Complete todos los campos requeridos</p>
      </div>
      <div className="grid gap-4 max-h-[60vh] overflow-y-scroll pr-2">
        {renderInput("ADDRESSLINE_MAIL", "Correo", "email")}
        {renderInput("PASSWORD", "Contraseña", "password")}
        {renderInput("IDENTIFICACION", "Número de Identificación")}
        <div className="grid gap-3">
          <Label htmlFor="TIPO_IDENTIFICACION">Tipo de Identificación</Label>
          <select
          id="TIPO_IDENTIFICACION"
          required
          value={form.TIPO_IDENTIFICACION}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, TIPO_IDENTIFICACION: e.target.value }))
          }
          className="border border-gray-300 rounded px-2 py-1"
          >
          <option value="">Seleccione una opción</option>
          <option value="CC">Cédula de Ciudadanía</option>
          <option value="TI">Tarjeta de Identidad</option>
          <option value="CE">Cédula de Extranjería</option>
          </select>
      </div>
        {renderInput("ACTA_INGRESO", "Acta de Ingreso")}
        {renderInput("ESTADO_CIVIL", "Estado Civil")}
        {renderInput("PAIS_NACIMIENTO", "País de Nacimiento")}
        {renderInput("RAZONSOCIAL", "Razón Social")}
        {renderInput("PERSONAS_A_CARGO", "Personas a Cargo")}
        {renderInput("DEPARTAMENTO_NACIMIENTO", "Departamento de Nacimiento")}
        {renderInput("GENERO", "Género")}
        {renderInput("MUNICIPIO_NACIMIENTO", "Municipio de Nacimiento")}
        {renderInput("PAIS_IDENTIFICACION", "País de Identificación")}
        {renderInput("DIRECCION_RESIDENCIA", "Dirección de Residencia")}
        {renderInput("TIPO_VIVIENDA", "Tipo de Vivienda")}
        {renderInput("LUGAR_EXPEDICION", "Lugar de Expedición")}
        {renderInput("PAIS_RESIDENCIA", "País de Residencia")}
        {renderInput("ESTRATO", "Estrato")}
        {renderInput("FECHA_NACIMIENTO", "Fecha de Nacimiento", "date")}
        {renderInput("DEPARTAMENTO_RESIDENCIA", "Departamento de Residencia")}
        {renderInput("OCUPACION", "Ocupación")}
        {renderInput("FECHA_INGRESO", "Fecha de Ingreso", "date")}
        {renderInput("CIUDAD_RESIDENCIA", "Ciudad de Residencia")}
        {renderInput("NIVEL_ACADEMICO", "Nivel Académico")}
        {renderInput("EDAD", "Edad")}
        {renderInput("ADDRESSLINE_CELULAR", "Celular")}
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && <p className="text-green-600 text-sm text-center">{success}</p>}

      <Button type="submit" className="w-full">Registrarse</Button>

      <div className="text-center text-sm">
        ¿Ya tiene una cuenta?{' '}
        <Link href="/" className="underline underline-offset-4">Iniciar sesión</Link>
      </div>
    </form>
  )
}
