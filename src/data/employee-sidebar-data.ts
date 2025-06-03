import {
  IconCreditCard,
  IconHome,
  IconClipboardText,
  IconForms,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

export const employeeSidebarData = {
  user: {
    name: "Empleado",
    email: "ejemplo@correo.com",
    avatar: "#",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/empleado/inicio",
      icon: IconHome,
    },
    {
      title: "Asociados",
      url: "/empleado/asociados/consultar",
      icon: IconUsers,
    },
    {
      title: "Datacrédito",
      url: "/empleado/datacredito",
      icon: IconCreditCard,
    },
    {
      title: "Reportes",
      url: "/empleado/reportes",
      icon: IconClipboardText,
    },
    {
      title: "PQRS",
      url: "/empleado/pqrs",
      icon: IconForms,
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "/empleado/configuracion",
      icon: IconSettings,
    },
  ],
}