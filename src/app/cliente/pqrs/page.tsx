"use client"

//Main layout imports.
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { clientSidebarData } from "@/data/client-sidebar-data"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Form imports.
import { PqrsForm } from "@/components/pqrs-form"
import { PqrsFormData } from "@/lib/schemas/pqrs-schema"

//Data table imports.
import { PqrsColumns } from "@/lib/columns/pqrs-columns"
import { pqr } from "@/lib/types/models"
import { DataTable } from "@/components/data-table/data-table"

import { useEffect, useState } from "react"
import { createPqrs, getPqrsByUsuario, getSessionId } from "@/lib/api-client"

async function getData(): Promise<pqr[]> {
  const id = await getSessionId();
  return getPqrsByUsuario(id);
}

export default function PQRSCliente() {
  const [data, setData] = useState<pqr[]>([]);
  useEffect(() => {onInit()}, []);

  async function onInit() {
    const auxData = await getData();
    setData(auxData);
  }

async function handleFormSubmit(data: PqrsFormData) {
    try {
      await createPqrs(data)
      alert("PQRS enviada exitosamente.")
    } catch (error) {
      console.error(error)
      alert("Error al enviar la PQRS.")
    }
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
      <AppSidebar data={clientSidebarData} variant="inset" />
      <SidebarInset>
        <SiteHeader
          title="PQRS"
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-xl font-medium py-4">Crear y Consultar PQRS</h1>
                <Tabs defaultValue="crear">
                  <TabsList>
                      <TabsTrigger value="crear">Crear</TabsTrigger>
                      <TabsTrigger value="consultar">Consultar</TabsTrigger>
                  </TabsList>
                  <TabsContent value="crear">
                    <PqrsForm onSubmit={handleFormSubmit} />
                  </TabsContent>
                  <TabsContent value="consultar">
                  <DataTable
                    columns={PqrsColumns}
                    data={data}
                    filterableColumns={[
                      { id: "tipoSolicitud", title: "Tipo de Solicitud" },
                      { id: "servicio", title: "Servicio" },
                    ]}
                  />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}