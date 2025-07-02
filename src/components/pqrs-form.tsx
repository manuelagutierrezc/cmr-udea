"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash, Send } from "lucide-react"

export type PqrsFormData = {
    nombre: string
    tipoIdentificacion: string
    documentoIdentificacion: string
    email: string
    tipoSolicitante: string
    pais: string
    provincia: string
    ciudad: string
    medioContacto: string
    telefono: string
    movil: string
    direccion: string
    tipoSolicitud: string
    servicio: string
    titulo: string
    descripcion: string
    adjunto?: File | null
}

interface PqrsFormProps {
    onSubmit: (data: PqrsFormData) => void
}

export function PqrsForm({ onSubmit }: PqrsFormProps) {
    const [formData, setFormData] = useState<PqrsFormData>({
        nombre: "",
        tipoIdentificacion: "",
        documentoIdentificacion: "",
        email: "",
        tipoSolicitante: "",
        pais: "",
        provincia: "",
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
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
        ...prev,
        adjunto: e.target.files?.[0] || null
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card 1: Información del usuario */}
        <Card>
            <CardHeader>
            <CardTitle className="text-lg text-center">Información del usuario</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
            <div className="flex flex-col space-y-2">
                <Label>Nombre:</Label>
                <Input name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Tipo de identificación:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, tipoIdentificacion: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="CC">Cédula</SelectItem>
                    <SelectItem value="CE">Cédula extranjera</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de identificación:</Label>
                <Input name="documentoIdentificacion" value={formData.documentoIdentificacion} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Correo electrónico:</Label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Tipo de solicitante:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, tipoSolicitante: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Asociado">Asociado</SelectItem>
                    <SelectItem value="Externo">Externo</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>País:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, pais: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Colombia">Colombia</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Departamento:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, provincia: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Antioquia">Antioquia</SelectItem>
                    <SelectItem value="Cundinamarca">Cundinamarca</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Ciudad:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, ciudad: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Medellín">Medellín</SelectItem>
                    <SelectItem value="Bogotá">Bogotá</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Medio de contacto preferido:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, medioContacto: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="Teléfono">Teléfono</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de teléfono fijo:</Label>
                <Input name="telefono" value={formData.telefono} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Número de teléfono móvil:</Label>
                <Input name="movil" value={formData.movil} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Dirección:</Label>
                <Input name="direccion" value={formData.direccion} onChange={handleChange} />
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
                <Label>Tipo de solicitud:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, tipoSolicitud: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Petición">Petición</SelectItem>
                    <SelectItem value="Queja">Queja</SelectItem>
                    <SelectItem value="Reclamo">Reclamo</SelectItem>
                    <SelectItem value="Sugerencia">Sugerencia</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Servicio:</Label>
                <Select onValueChange={(val) => setFormData((f) => ({ ...f, servicio: val }))}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Créditos">Créditos</SelectItem>
                    <SelectItem value="Ahorros">Ahorros</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Título:</Label>
                <Input name="titulo" value={formData.titulo} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Cuéntanos sobre tu solicitud:</Label>
                <Textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Adjuntar archivo:</Label>
                <Input type="file" onChange={handleFileChange} />
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