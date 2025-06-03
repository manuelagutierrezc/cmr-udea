"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { employeeSidebarData } from "@/data/employee-sidebar-data"

export default function ConsultarAsociados() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={employeeSidebarData} variant="inset" />
      <SidebarInset>
        <SiteHeader
          title="Asociados"
          items={[
            { title: "Consultar", href: "/empleado/asociados/consultar" },
            { title: "Estadísticas", href: "/empleado/asociados/estadisticas" },
          ]}
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <p>Esta es la página &quot;Consultar Asociados&quot;.</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
