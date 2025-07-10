import colombia from "@/lib/data/colombia.json"

export interface SelectOption {
    value: string
    label: string
}

export const tipoIdentificacionOptions: SelectOption[] = [
    { value: "CC", label: "CC" },
    { value: "NIT", label: "NIT" },
    { value: "CE", label: "CE" },
]

export const tipoSolicitanteOptions: SelectOption[] = [
    { value: "Asociado", label: "Asociado" },
    { value: "Exasociado", label: "Exasociado" },
    { value: "Externo", label: "Externo" },
    { value: "Colaborador", label: "Colaborador" },
    { value: "Proveedor", label: "Proveedor" },
    { value: "Otros", label: "Otros" },
]

export const paisOptions: SelectOption[] = [
    { value: "Colombia", label: "Colombia" },
]

export const departamentoOptions: SelectOption[] = colombia.map((d) => ({
    value: d.departamento,
    label: d.departamento,
}))

export function getCiudadesPorDepartamento(dep: string): SelectOption[] {
    const departamento = colombia.find((d) => d.departamento === dep);
    return (departamento?.ciudades || []).map((ciudad: string) => ({
        value: ciudad,
        label: ciudad,
    }));
}

export const medioContactoOptions: SelectOption[] = [
    { value: "Email", label: "Email" },
    { value: "Teléfono", label: "Teléfono" },
]

export const tipoSolicitudOptions: SelectOption[] = [
    { value: "Peticiones", label: "Peticiones" },
    { value: "Quejas", label: "Quejas" },
    { value: "Reclamos", label: "Reclamos" },
    { value: "Requerimientos de Ayuda", label: "Requerimientos de Ayuda" },
    { value: "Sugerencia", label: "Sugerencia" },
    { value: "Reconocimientos", label: "Reconocimientos" },
    { value: "Solicitudes", label: "Solicitudes" },
    { value: "Felicitaciones", label: "Felicitaciones" },
    { value: "Otros", label: "Otros" },
]

export const servicioOptions: SelectOption[] = [
    { value: "01-Ahorro", label: "01-Ahorro" },
    { value: "02-Crédito", label: "02-Crédito" },
    { value: "03-Cartera", label: "03-Cartera" },
    { value: "04-Convenios", label: "04-Convenios" },
    { value: "05-Jurídico y Legal", label: "05-Jurídico y Legal" },
    { value: "06-Tecnológicos", label: "06-Tecnológicos" },
    { value: "08-Librería", label: "08-Librería" },
    { value: "09-Transferencias", label: "09-Transferencias" },
    { value: "10-Comunicaciones", label: "10-Comunicaciones" },
    { value: "11- Gestión Social", label: "11- Gestión Social" },
    { value: "12- Contabilidad", label: "12- Contabilidad" },
    { value: "13-Aportes", label: "13-Aportes" },
    { value: "Gestión de Operaciones", label: "Gestión de Operaciones" },
    { value: "Protección de Datos", label: "Protección de Datos" },
]