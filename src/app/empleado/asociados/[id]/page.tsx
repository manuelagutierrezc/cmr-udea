"use client"

//Main layout imports.
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { employeeSidebarData } from "@/data/employee-sidebar-data"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

//Data display imports.
import { DataCard } from "@/components/data-card"
import { DataTable } from "@/components/data-table/data-table"
import { Usuario, CreditoPrestamo, DireccionUsuario, Empleo, FinanzasPersonales, ReingresosUsuario} from "@/lib/types/models"
import { CreditoPrestamoColumns } from "@/lib/columns/credito-prestamo-columns"
import { DireccionColumns } from "@/lib/columns/direccion-columns"
import { EmpleoColumns } from "@/lib/columns/empleo-columns"
import { FinanzasPersonalesColumns } from "@/lib/columns/finanzas-columns"
import { ReingresosColumns } from "@/lib/columns/reingresos-columns"

import { Capitalize } from "@/lib/utils"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchUsuarioPorIdentificacion, fetchDireccionPorUsuario, fetchEmpleoPorUsuario, fetchFinanzasPorUsuario, fetchReingresosPorUsuario, fetchCreditosPorUsuario } from "@/lib/api-client"


export default function DetallesAsociado() {
    const params = useParams()
    const rawId = params.id
    const id = Array.isArray(rawId) ? rawId[0] : rawId

    const [asociadoData, setAsociadoData] = useState<Usuario>();
    const [creditoPrestamoData, setCreditoPrestamoData] = useState<CreditoPrestamo[]>([]);
    const [direccionData, setDireccionData] = useState<DireccionUsuario[]>([]);
    const [empleoData, setEmpleoData] = useState<Empleo[]>([]);
    const [finanzasData, setFinanzasData] = useState<FinanzasPersonales[]>([]);
    const [reingresosData, setReingresosData] = useState<ReingresosUsuario[]>([]);

    useEffect(() => {
        async function getAsociado(): Promise<Usuario> {
            return fetchUsuarioPorIdentificacion(id);
        }

        async function getCreditoPrestamo(): Promise<CreditoPrestamo[]> {
            return fetchCreditosPorUsuario(id);
        }
    
        async function getDireccionUsuario(): Promise<DireccionUsuario[]> {
            return fetchDireccionPorUsuario(id);
        }
    
        async function getEmpleo(): Promise<Empleo[]> {
            return fetchEmpleoPorUsuario(id);
        }
    
        async function getFinanzasPersonales(): Promise<FinanzasPersonales[]> {
            return fetchFinanzasPorUsuario(id);
        }
    
        async function getReingresos(): Promise<ReingresosUsuario[]> {
            return fetchReingresosPorUsuario(id);
        }
    
        async function onInit() {
            const asociadoData = await getAsociado();
            setAsociadoData(asociadoData);
            const creditoPrestamoData = await getCreditoPrestamo();
            setCreditoPrestamoData(creditoPrestamoData);
            const direccionData = await getDireccionUsuario();
            setDireccionData(direccionData);
            const empleoData = await getEmpleo();
            setEmpleoData(empleoData);
            const finanzasData = await getFinanzasPersonales();
            setFinanzasData(finanzasData);
            const reingresosData = await getReingresos();
            setReingresosData(reingresosData);
        }
        onInit();
    }, [id]);

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
            />
            <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">
                    <h1 className="text-xl font-medium py-4">
                        Detalles del asociado: {Capitalize(asociadoData?.PRIMER_NOMBRE)} {Capitalize(asociadoData?.SEGUNDO_NOMBRE)} {Capitalize(asociadoData?.PRIMER_APELLIDO)} {Capitalize(asociadoData?.SEGUNDO_APELLIDO)}
                    </h1>
                    <Tabs defaultValue="direccion">
                        <TabsList>
                            <TabsTrigger value="direccion">Dirección</TabsTrigger>
                            <TabsTrigger value="empleo">Empleo</TabsTrigger>
                            <TabsTrigger value="finanzas">Finanzas Personales</TabsTrigger>
                            <TabsTrigger value="reingresos">Reingresos</TabsTrigger>
                            <TabsTrigger value="creditos">Créditos</TabsTrigger>
                        </TabsList>
                        <TabsContent value="direccion">
                            <DataCard
                                title="Información de residencia"
                                columns={DireccionColumns}
                                data={direccionData}
                            />
                        </TabsContent>
                        <TabsContent value="empleo">
                            <DataCard
                                title="Información laboral"
                                columns={EmpleoColumns}
                                data={empleoData}
                            />
                        </TabsContent>
                        <TabsContent value="finanzas">
                            <DataCard
                                title="Información financiera"
                                columns={FinanzasPersonalesColumns}
                                data={finanzasData}
                            />
                        </TabsContent>
                        <TabsContent value="reingresos">
                            <DataCard
                                title="Reingreso"
                                columns={ReingresosColumns}
                                data={reingresosData}
                            />
                        </TabsContent>
                        <TabsContent value="creditos">
                            <DataTable
                                columns={CreditoPrestamoColumns}
                                data={creditoPrestamoData}
                            />
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