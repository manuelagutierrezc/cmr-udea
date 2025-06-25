"use client"

//Main layout imports.
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { employeeSidebarData } from "@/data/employee-sidebar-data"

//Data table imports.
import { UsuarioColumns } from "./usuario-columns"
import { Usuario } from "@/lib/types/models"
import { DataTable } from "@/components/data-table"
import { mockClients } from "./mock-data" // Mock data for testing purposes.

import { useEffect, useState } from "react"

async function getData(): Promise<Usuario[]> {
  // Fetch data from API here.
  return mockClients // Mock data for testing purposes.
}

export default function ConsultarAsociados() {
  const [data, setData] = useState<Usuario[]>([]);
  useEffect(() => {onInit()}, []);

  async function onInit() {
    const auxData = await getData();
    setData(auxData);
  }

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
                <h1 className="text-xl font-medium py-4">Consultar Asociados</h1>
                <DataTable columns={UsuarioColumns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}