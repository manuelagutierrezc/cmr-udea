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
import { PqrsColumns } from "@/lib/columns/pqrs-columns"
import { pqr } from "@/lib/types/models"
import { DataTable } from "@/components/data-table/data-table"

import { useEffect, useState } from "react"
import { getPqrs } from "@/lib/api-client"

async function getData(): Promise<pqr[]> {
  return getPqrs();
}

export default function AtenderPQRS() {
    const [data, setData] = useState<pqr[]>([]);
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
          title="PQRS"
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-xl font-medium py-4">Consultar PQRS</h1>
                <DataTable
                  columns={PqrsColumns}
                  data={data}
                  filterableColumns={[
                    { id: "tipoSolicitante", title: "Tipo de Solicitante" },
                    { id: "tipoSolicitud", title: "Tipo de Solicitud" },
                    { id: "servicio", title: "Servicio" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}