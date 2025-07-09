import { z } from "zod"

export const pqrsSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    tipoIdentificacion: z.string().min(1, "Seleccione el tipo de identificación"),
    documentoIdentificacion: z.string().min(1, "El número de identificación es obligatorio"),
    email: z.string().email("Ingrese un correo válido"),
    tipoSolicitante: z.string().min(1, "Seleccione el tipo de solicitante"),
    pais: z.string().min(1, "Seleccione un país"),
    provincia: z.string().min(1, "Seleccione un departamento"),
    ciudad: z.string().min(1, "Seleccione una ciudad"),
    medioContacto: z.string().optional(),
    telefono: z.string().optional(),
    movil: z.string().min(1, "El número de móvil es obligatorio"),
    direccion: z.string().min(1, "La dirección es obligatoria"),
    tipoSolicitud: z.string().min(1, "Seleccione el tipo de solicitud"),
    servicio: z.string().min(1, "Seleccione un servicio"),
    titulo: z.string().min(1, "Ingrese un título"),
    descripcion: z.string().min(1, "Describa su solicitud"),
    adjunto: z.any().optional(),
})

export type PqrsFormData = z.infer<typeof pqrsSchema>