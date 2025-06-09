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
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"
import { mockClients } from "./mock-data" // Mock data for testing purposes.

import { useEffect, useState } from "react"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return mockClients // Mock data for testing purposes.
}

export default function ConsultarAsociados() {
  const [data, setData] = useState<Payment[]>([]);
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
                <p className="py-4">Esta es la página &quot;Consultar Asociados&quot;.</p>
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}