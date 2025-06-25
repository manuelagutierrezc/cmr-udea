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
import { FinanzasPersonalesColumns } from "../finanzas-columns"
import { FinanzasPersonales } from "@/lib/types/models"
import { DataTable } from "@/components/data-table"
import { mockFinanzas } from "../mock-data" // Mock data for testing purposes.

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

async function getFinanzasPersonales(): Promise<FinanzasPersonales[]> {
  // Fetch data from API here.
  return mockFinanzas // Mock data for testing purposes.
}

export default function DetallesAsociado() {
    const params = useParams()
    const id = params.id

    const [finanzasData, setFinanzasData] = useState<FinanzasPersonales[]>([]);
    useEffect(() => {onInit()}, []);

    async function onInit() {
        const auxData = await getFinanzasPersonales();
        setFinanzasData(auxData);
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
                    <h1 className="text-xl font-medium py-4">Detalles del asociado con ID: {id}</h1>
                    <Tabs defaultValue="finanzas">
                        <TabsList>
                            <TabsTrigger value="direccion">Dirección</TabsTrigger>
                            <TabsTrigger value="empleo">Empleo</TabsTrigger>
                            <TabsTrigger value="finanzas">Finanzas Personales</TabsTrigger>
                            <TabsTrigger value="reingresos">Reingresos</TabsTrigger>
                            <TabsTrigger value="creditos">Créditos</TabsTrigger>
                        </TabsList>
                        <TabsContent value="direccion">
                            Dirección
                        </TabsContent>
                        <TabsContent value="empleo">
                            Empleo
                        </TabsContent>
                        <TabsContent value="finanzas">
                            <DataTable columns={FinanzasPersonalesColumns} data={finanzasData} />
                        </TabsContent>
                        <TabsContent value="reingresos">
                            Reingresos
                        </TabsContent>
                        <TabsContent value="creditos">
                            Créditos
                        </TabsContent>
                    </Tabs>
                </div>
                </div>
            </div>
            </div>
        </SidebarInset>
        </SidebarProvider>
    )
    }