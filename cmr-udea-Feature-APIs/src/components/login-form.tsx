"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ADDRESSLINE_MAIL: email,
          PASSWORD: password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        
        console.log("Usuario autenticado:", data.info)

        // Redireccionar según el rol
        const rol = data.info.cliente
        if (rol === "cliente") {           // rol == true para ver el inicio del cliente
          router.push("/cliente/inicio")
        } else if (rol === "empleado") {
          router.push("/empleado/inicio")
        } else {
          router.push("/")
        }
      } else {
        setError(data.error || "Error al iniciar sesión")
      }
    } catch (err) {
      console.error("Error en login:", err)
      setError("Error al conectar con el servidor")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Le damos la bienvenida</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Autentifíquese para continuar
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              ¿Olvidó su contraseña?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <Button type="submit" className="w-full">
          Ingresar
        </Button>
      </div>
      <div className="text-center text-sm">
        ¿Aún no tiene una cuenta?{" "}
        <Link href="/registro" className="underline underline-offset-4">
          Registrarse
        </Link>
      </div>
    </form>
  )
}
