"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { pqrsSchema, PqrsFormData } from "@/lib/schemas/pqrs-schema"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Trash, Send } from "lucide-react"

// Importación de opciones estáticas y función para obtener ciudades
import {
    tipoIdentificacionOptions,
    tipoSolicitanteOptions,
    paisOptions,
    medioContactoOptions,
    tipoSolicitudOptions,
    servicioOptions,
    departamentoOptions,
    getCiudadesPorDepartamento
} from "@/lib/data/select-options"

import { useState } from "react"

interface PqrsFormProps {
    onSubmit: (data: PqrsFormData) => void
}

export function PqrsForm({ onSubmit }: PqrsFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<PqrsFormData>({
        resolver: zodResolver(pqrsSchema),
        defaultValues: {
        nombre: "",
        tipoIdentificacion: "",
        documentoIdentificacion: "",
        email: "",
        tipoSolicitante: "",
        pais: "",
        departamento: "",
        ciudad: "",
        medioContacto: "",
        telefono: "",
        movil: "",
        direccion: "",
        tipoSolicitud: "",
        servicio: "",
        titulo: "",
        descripcion: "",
        adjunto: null,
    }
    })

    // Estado para almacenar las ciudades disponibles según el departamento seleccionado
    const [ciudades, setCiudades] = useState<string[]>([])

    // Manejar cambios en el departamento para actualizar ciudades disponibles
    const handleDepartamentoChange = (value: string) => {
        setValue("departamento", value)
        setCiudades(getCiudadesPorDepartamento(value).map(opt => opt.value))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Card 1: Información del usuario */}
        <Card>
            <CardHeader>
            <CardTitle className="text-lg text-center">Información del usuario</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-2">
                <Label>Nombre:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("nombre")} />
                {errors.nombre && <p className="text-sm text-red-500">{errors.nombre.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Tipo de identificación:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("tipoIdentificacion", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {tipoIdentificacionOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.tipoIdentificacion && <p className="text-sm text-red-500">{errors.tipoIdentificacion.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de identificación:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("documentoIdentificacion")} />
                {errors.documentoIdentificacion && <p className="text-sm text-red-500">{errors.documentoIdentificacion.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Correo electrónico:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("email")} />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Tipo de solicitante:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("tipoSolicitante", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {tipoSolicitanteOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.tipoSolicitante && <p className="text-sm text-red-500">{errors.tipoSolicitante.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>País:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("pais", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {paisOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.pais && <p className="text-sm text-red-500">{errors.pais.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Departamento:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={handleDepartamentoChange}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {departamentoOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.departamento && <p className="text-sm text-red-500">{errors.departamento.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Ciudad:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("ciudad", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {ciudades.map(ciudad => (
                    <SelectItem key={ciudad} value={ciudad}>{ciudad}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.ciudad && <p className="text-sm text-red-500">{errors.ciudad.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Medio de contacto preferido:</Label>
                <Select onValueChange={val => setValue("medioContacto", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {medioContactoOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de teléfono fijo:</Label>
                <Input {...register("telefono")} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de teléfono móvil:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("movil")} />
                {errors.movil && <p className="text-sm text-red-500">{errors.movil.message}</p>}
            </div>

            <div className="flex flex-col space-y-2">
                <Label>Dirección:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("direccion")} />
                {errors.direccion && <p className="text-sm text-red-500">{errors.direccion.message}</p>}
            </div>
            </CardContent>
        </Card>

        {/* Card 2: Información de la solicitud */}
        <Card>
            <CardHeader>
            <CardTitle className="text-lg text-center">Información de la solicitud</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-2">
                <Label>Tipo de solicitud:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("tipoSolicitud", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {tipoSolicitudOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.tipoSolicitud && <p className="text-sm text-red-500">{errors.tipoSolicitud.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Servicio:<span className="text-accent-foreground">*</span></Label>
                <Select onValueChange={val => setValue("servicio", val)}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                    {servicioOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.servicio && <p className="text-sm text-red-500">{errors.servicio.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Título:<span className="text-accent-foreground">*</span></Label>
                <Input {...register("titulo")} />
                {errors.titulo && <p className="text-sm text-red-500">{errors.titulo.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Cuéntanos sobre tu solicitud:<span className="text-accent-foreground">*</span></Label>
                <Textarea {...register("descripcion")} />
                {errors.descripcion && <p className="text-sm text-red-500">{errors.descripcion.message}</p>}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Adjuntar archivo:</Label>
                <Input
                type="file"
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) setValue("adjunto", file)
                }}
                />
            </div>
            </CardContent>
        </Card>
        <div className="flex justify-end gap-2">
            <Button type="reset" variant="outline">
            <Trash className="mr-1 h-4 w-4" />
            Borrar
            </Button>
            <Button type="submit">
            <Send className="mr-1 h-4 w-4" />
            Enviar
            </Button>
        </div>
        </form>
    )
}