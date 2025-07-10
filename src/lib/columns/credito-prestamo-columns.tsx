import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
import { CreditoPrestamo, CreditoUsuario, TarjetaCredito, Garantia } from "@/lib/types/models"
// Column creation helper
import { makeColumn } from "@/lib/column-helpers"

// Imports for the actions column.
import { Search } from "lucide-react"
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { DataCardDialog } from "@/components/data-card-dialog"
import { useEffect, useState } from "react"
import { CreditoUsuarioColumns } from "./credito-usuario-columns"
import { TarjetaCreditoColumns } from "./tarjeta-credito-columns"
import { GarantiaColumns } from "./garantia-columns"

import { getDetallesCreditoById, getGarantiasByCreditoUsuario, getTarjetasByUsuario } from "../api-client"

function TableDropDown({ CreditoUsuarioId, IdentificacionUsuario }: { CreditoUsuarioId: number, IdentificacionUsuario : string }) {
    const [openDetalles, setOpenDetalles] = useState(false)
    const [openTarjetas, setOpenTarjetas] = useState(false)
    const [openGarantias, setOpenGarantias] = useState(false)

    // From here, get the data for the dialogs.
    const [detallesData, setDetallesData] = useState<CreditoUsuario | null>(null);
    const [tarjetaData, setTarjetaData] = useState<TarjetaCredito[]>([]);
    const [garantiaData, setGarantiaData] = useState<Garantia[]>([]);

    useEffect(() => {
        async function getDetalles(): Promise<CreditoUsuario> {
            return getDetallesCreditoById(CreditoUsuarioId);
        }

        async function getTarjetas(): Promise<TarjetaCredito[]> {
            return getTarjetasByUsuario(IdentificacionUsuario);
        }

        async function getGarantias(): Promise<Garantia[]> {
            return getGarantiasByCreditoUsuario(CreditoUsuarioId);
        }

        async function onInit() {
            const detallesData = await getDetalles();
            setDetallesData(detallesData);
            const tarjetaData = await getTarjetas();
            setTarjetaData(tarjetaData);
            const garantiaData = await getGarantias();
            setGarantiaData(garantiaData);
        }
        onInit();
    }, [CreditoUsuarioId, IdentificacionUsuario]);

    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir opciones</span>
                <Search className="h-4 w-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>Más información</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setOpenDetalles(true)}>Detalles</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenTarjetas(true)}>Tarjetas</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenGarantias(true)}>Garantías</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <DataCardDialog
            open={openDetalles}
            onOpenChange={setOpenDetalles}
            title="Información detallada"
            cardTitle="Detalles del crédito"
            data={detallesData ? [detallesData] : []}
            columns={CreditoUsuarioColumns}
        />

        <DataCardDialog
            open={openTarjetas}
            onOpenChange={setOpenTarjetas}
            title="Tarjetas asociadas"
            cardTitle="Tarjeta de crédito"
            data={tarjetaData}
            columns={TarjetaCreditoColumns}
        />

        <DataCardDialog
            open={openGarantias}
            onOpenChange={setOpenGarantias}
            title="Información de garantías"
            cardTitle="Garantía"
            data={garantiaData}
            columns={GarantiaColumns}
        />
        </>
    )
}

// This defines the columns of the table.
export const CreditoPrestamoColumns: ColumnDef<CreditoPrestamo>[] = [
    {
        //This is the actions column, it includes a dropdown menu.
        id: "actions",
        cell: ({ row }) => <TableDropDown CreditoUsuarioId={row.original.credito_usuario_id ?? 0} IdentificacionUsuario={row.original.usuario_id} />,
    },
    makeColumn<CreditoPrestamo>({
        key: "ID",
        label: "ID",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "clasegarantia",
        label: "Clase de Garantía",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "destinocredito",
        label: "Destino del Crédito",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "CodOficina",
        label: "Código de Oficina",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "AmortiCapital",
        label: "Amortización Capital",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "TipoVivienda",
        label: "Tipo de Vivienda",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "VIS",
        label: "VIS",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "RangoTipo",
        label: "Rango Tipo",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "EntidadRedescuento",
        label: "Entidad de Redescuento",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "MargenRedescuento",
        label: "Margen Redescuento (%)",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "Subsidio",
        label: "Subsidio",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "Desembolso",
        label: "Desembolso",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "Moneda",
        label: "Moneda",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "AportesSociales",
        label: "Aportes Sociales",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "LineaCredEntidad",
        label: "Línea de Crédito",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "NumModificaciones",
        label: "Modificaciones",
        type: "number",
    }),
    makeColumn<CreditoPrestamo>({
        key: "Estadocredito",
        label: "Estado del Crédito",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "NITPatronal",
        label: "NIT Patronal",
        type: "string",
    }),
    makeColumn<CreditoPrestamo>({
        key: "NombrePatronal",
        label: "Nombre Patronal",
        type: "string",
    }),
]