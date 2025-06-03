import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/images/placeholder.jpg"
          alt="Imagen lateral"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-col justify-center gap-2 md:justify-start">
          <img
              src="/images/logo.png"
              alt="Imagen de logo"
              className="max-w-[164px]"
            />
          <div className="flex items-center gap-2 font-medium">
            CRM Cooprudea
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
