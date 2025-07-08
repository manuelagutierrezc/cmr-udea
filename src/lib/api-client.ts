import { Usuario } from "@/lib/types/models"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export async function fetchUsuarios(): Promise<Usuario[]> {
    const res = await fetch(`${BASE_URL}/api/usuarios`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los datos de usuarios")
    }

    return res.json()
}