import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Le damos la bienvenida</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Autentifícarse para continuar
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Correo</Label>
          <Input id="email" type="email" placeholder="ejemplo@correo.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              ¿Olvido su contraseña?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Ingresar
        </Button>
        
      </div>
      <div className="text-center text-sm">
        Aún no tiene una cuenta?{" "}
        <Link href="/registro" className="underline underline-offset-4">
          Registrarse
        </Link>
      </div>
    </form>
  )
}
