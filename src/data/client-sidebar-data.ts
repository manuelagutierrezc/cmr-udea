import {
  IconHome,
  IconForms,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react"

export const clientSidebarData = {
  user: {
    name: "Asociado",
    email: "ejemplo@correo.com",
    avatar: "#",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/cliente/inicio",
      icon: IconHome,
    },
    {
      title: "Mis datos",
      url: "/cliente/datos",
      icon: IconUserCircle,
    },
    {
      title: "PQRS",
      url: "/cliente/pqrs/consultar",
      icon: IconForms,
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      url: "/cliente/configuracion",
      icon: IconSettings,
    },
  ],
}