import { CreditoPrestamo, DireccionUsuario, Empleo, FinanzasPersonales, ReingresosUsuario, Usuario } from "@/lib/types/models"

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

export async function fetchUsuarioPorIdentificacion(id: string): Promise<Usuario> {
    const res = await fetch(`${BASE_URL}/api/usuarios/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los datos del usuario")
    }

    return res.json()
}

export async function fetchDireccionPorUsuario(id: string): Promise<DireccionUsuario[]> {
    const res = await fetch(`${BASE_URL}/api/direcciones/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener la dirección")
    }

    return res.json()
}

export async function fetchEmpleoPorUsuario(id: string): Promise<Empleo[]> {
    const res = await fetch(`${BASE_URL}/api/empleos/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener el empleo")
    }

    return res.json()
}

export async function fetchFinanzasPorUsuario(id: string): Promise<FinanzasPersonales[]> {
    const res = await fetch(`${BASE_URL}/api/finanzas/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las finanzas")
    }

    return res.json()
}

export async function fetchReingresosPorUsuario(id: string): Promise<ReingresosUsuario[]> {
    const res = await fetch(`${BASE_URL}/api/reingresos-usuario/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los reingresos")
    }

    return res.json()
}

export async function fetchCreditosPorUsuario(id: string): Promise<CreditoPrestamo[]> {
    const res = await fetch(`${BASE_URL}/api/creditos/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los creditos")
    }

    return res.json()
}