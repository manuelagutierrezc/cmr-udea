import { ColumnDef } from "@tanstack/react-table"
// This type is used to define the shape of our data.
import { CreditoUsuario } from "@/lib/types/models"
// Column creation helper
import { makeColumn } from "@/lib/column-helpers"

// This defines the columns of the table.
export const CreditoUsuarioColumns: ColumnDef<CreditoUsuario>[] = [
    makeColumn<CreditoUsuario>({
        key: "TipoIden",
        label: "Tipo Identificación",
        type: "string"
    }),
    makeColumn<CreditoUsuario>({
        key: "NIT",
        label: "NIT",
        type: "string"
    }),
    makeColumn<CreditoUsuario>({
        key: "CodigoContable",
        label: "Código contable",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "ModificacionesAlCredito",
        label: "Modificaciones al crédito",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "NroCredito",
        label: "Número de crédito",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "FechaDesembolsoInicial",
        label: "Fecha de desembolso",
        type: "date"
    }),
    makeColumn<CreditoUsuario>({
        key: "FechaVencimiento",
        label: "Fecha de vencimiento",
        type: "date"
    }),
    makeColumn<CreditoUsuario>({
        key: "Morosidad",
        label: "Morosidad",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "TipoCuota",
        label: "Tipo de cuota",
        type: "string"
    }),
    makeColumn<CreditoUsuario>({
        key: "AlturaCuota",
        label: "Altura de cuota",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "Amortizacion",
        label: "Amortización",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "Modalidad",
        label: "Modalidad",
        type: "string"
    }),
    makeColumn<CreditoUsuario>({
        key: "TasaInteresEfectiva",
        label: "Tasa interés efectiva",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "ValorPrestamo",
        label: "Valor del préstamo",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "ValorCuotaFija",
        label: "Valor cuota fija",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "SaldoCapital",
        label: "Saldo capital",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "SaldoIntereses",
        label: "Saldo intereses",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "OtrosSaldos",
        label: "Otros saldos",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "ValorMora",
        label: "Valor mora",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "ValosCuotasExtra",
        label: "Cuotas extra",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "MesesCuotaExtra",
        label: "Meses cuota extra",
        type: "number"
    }),
    makeColumn<CreditoUsuario>({
        key: "fechaultimopago",
        label: "Último pago",
        type: "date"
    }),
]