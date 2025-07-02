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
import { PqrsForm, PqrsFormData } from "@/components/pqrs-form"

//Data table imports.
import { PqrsColumns } from "@/lib/columns/pqrs-columns"
import { pqr } from "@/lib/types/models"
import { DataTable } from "@/components/data-table"
import { mockPqrs } from "@/data/mock/pqrs" // Mock data for testing purposes.

import { useEffect, useState } from "react"

async function getData(): Promise<pqr[]> {
  // Fetch data from API here.
  // It should be only the data that match the id from the current user.
  const data: pqr[] = mockPqrs.slice(0, 3) // Mock data for testing purposes.
  return data
}

export default function PQRSCliente() {
  const [data, setData] = useState<pqr[]>([]);
  useEffect(() => {onInit()}, []);

  async function onInit() {
    const auxData = await getData();
    setData(auxData);
  }

  const handlePqrsSubmit = (data: PqrsFormData) => {
    // Send data to the backend API here.
    console.log("PQRS enviada:", data)
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
                <Tabs defaultValue="crear">
                  <TabsList>
                      <TabsTrigger value="crear">Crear</TabsTrigger>
                      <TabsTrigger value="consultar">Consultar</TabsTrigger>
                  </TabsList>
                  <TabsContent value="crear">
                    <PqrsForm onSubmit={handlePqrsSubmit} />
                  </TabsContent>
                  <TabsContent value="consultar">
                    <DataTable columns={PqrsColumns} data={data} />
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