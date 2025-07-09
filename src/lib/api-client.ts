import { CreditoPrestamo, CreditoUsuario, DireccionUsuario, Empleo, FinanzasPersonales, Garantia, pqr, ReingresosUsuario, TarjetaCredito, Usuario } from "@/lib/types/models"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export async function getSessionId() {
    // Here add logic to get the id.
    return "4406051135"; // Returning a fixed number for testing purposes only.
}

export async function getSessionRole() {
    // Here add logic to get the role.
    return "admin"; // Returning a fixed role for testing purposes only.
}

export async function getUsuarios(): Promise<Usuario[]> {
    const res = await fetch(`${BASE_URL}/api/usuarios`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los datos de usuarios")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getUsuarioByIdentificacion(id: string): Promise<Usuario> {
    const res = await fetch(`${BASE_URL}/api/usuarios/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los datos del usuario")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getDireccionByUsuario(id: string): Promise<DireccionUsuario[]> {
    const res = await fetch(`${BASE_URL}/api/direcciones/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener la dirección")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getEmpleoByUsuario(id: string): Promise<Empleo[]> {
    const res = await fetch(`${BASE_URL}/api/empleos/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener el empleo")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getFinanzasByUsuario(id: string): Promise<FinanzasPersonales[]> {
    const res = await fetch(`${BASE_URL}/api/finanzas/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las finanzas")
    }

    return res.json()
}

//This function receives the user's table entry ID
export async function getReingresosByUsuarioId(id: number): Promise<ReingresosUsuario[]> {
    const res = await fetch(`${BASE_URL}/api/reingresos-usuario/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los reingresos")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getCreditosByUsuario(id: string): Promise<CreditoPrestamo[]> {
    const res = await fetch(`${BASE_URL}/api/creditos/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener los creditos")
    }

    return res.json()
}

export async function getDetallesCreditoById(id: number): Promise<CreditoUsuario> {
    const res = await fetch(`${BASE_URL}/api/creditos-usuario/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        const error = await res.json();
        console.error("Error en fetchDetallesCreditoPorId:", error);
        throw new Error("Error al obtener detalles del crédito");
    }

    return res.json();
}

export async function getGarantiasByCreditoUsuario(id: number): Promise<Garantia[]> {
    const res = await fetch(`${BASE_URL}/api/garantias/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las garantias")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getTarjetasByUsuario(id: string): Promise<TarjetaCredito[]> {
    const res = await fetch(`${BASE_URL}/api/tarjetas/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las tarjetas")
    }

    return res.json()
}

export async function getPqrs(): Promise<pqr[]> {
    const res = await fetch(`${BASE_URL}/api/pqr`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las PQRS")
    }

    return res.json()
}

// This function receives the user's identification number
export async function getPqrsByUsuario(id: string): Promise<pqr[]> {
    const res = await fetch(`${BASE_URL}/api/pqr/usuario/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Error al obtener las PQRS del usuario")
    }

    return res.json()
}