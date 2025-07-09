export type Usuario = {
    ID: number;
    TIPO_IDENTIFICACION: string;
    ACTA_INGRESO: string;
    IDENTIFICACION: string;
    ESTADO_CIVIL: string;
    PAIS_NACIMIENTO: string;
    RAZONSOCIAL: string;
    PERSONAS_A_CARGO: number;
    DEPARTAMENTO_NACIMIENTO: string;
    GENERO: string;
    ADDRESSLINE_MAIL: string;
    MUNICIPIO_NACIMIENTO: string;
    PAIS_IDENTIFICACION: string;
    DIRECCION_RESIDENCIA: string;
    TIPO_VIVIENDA: string;
    LUGAR_EXPEDICION: string;
    PAIS_RESIDENCIA: string;
    ESTRATO: number;
    FECHA_NACIMIENTO: Date;
    DEPARTAMENTO_RESIDENCIA: string;
    OCUPACION: string;
    FECHA_INGRESO: Date;
    CIUDAD_RESIDENCIA: string;
    NIVEL_ACADEMICO: string;
    EDAD: number;
    ADDRESSLINE_CELULAR: string;
    CODIGO_VERIFICACION?: string;
    CLIENTE?: boolean;
    TERCERO?: boolean;
    CODEUCOR_NA?: string;
    EMPLEADO?: boolean;
    ASOCIADO?: boolean;
    PROVEEDOR?: boolean;
    PRIMER_NOMBRE?: string;
    SEGUNDO_NOMBRE?: string;
    PRIMER_APELLIDO?: string;
    SEGUNDO_APELLIDO?: string;
    SUCURSAL?: string;
    ESTADO?: string;
    ULTIMA_ACTUALIZACION?: Date;
    NACIONALIDAD?: string;
    NUMERO_HIJOS?: number;
    MAXIMO_TITULO?: string;
    CONYUGUE?: string;
};

export type CreditoUsuario = {
    ID:                       number;
    TipoIden?:                string;
    NIT?:                     string;
    CodigoContable?:          number;
    ModificacionesAlCredito?: number;
    NroCredito?:              string;
    FechaDesembolsoInicial?:  Date;
    FechaVencimiento?:        Date;
    Morosidad?:               number;
    TipoCuota?:               string;
    AlturaCuota?:             number;
    Amortizacion?:            number;
    Modalidad?:               string;
    TasaInteresEfectiva?:     number;
    ValorPrestamo?:           number;
    ValorCuotaFija?:          number;
    SaldoCapital?:            number;
    SaldoIntereses?:          number;
    OtrosSaldos?:             number;
    ValorMora?:               number;
    ValosCuotasExtra?:        number;
    MesesCuotaExtra?:         number;
    fechaultimopago?:         Date;
}

export type CreditoPrestamo = {
    ID:                   number;
    usuario_id:           string;
    credito_usuario_id?:  number;
    clasegarantia?:       string;
    destinocredito?:      string;
    CodOficina?:          string;
    AmortiCapital?:       number;
    TipoVivienda?:        string;
    VIS?:                 number;
    RangoTipo?:           string;
    EntidadRedescuento?:  string;
    MargenRedescuento?:   number;
    Subsidio?:            string;
    Desembolso?:          string;
    Moneda?:              string;
    AportesSociales?:     number;
    LineaCredEntidad?:    string;
    NumModificaciones?:   number;
    Estadocredito?:       string;
    NITPatronal?:         string;
    NombrePatronal?:      string;
}

export type TarjetaCredito = {
    ID:                   number;
    usuario_id:           string;
    credito_usuario_id?:  number;
    TARJCREDCUPROT?:      string;
    ENTOTORGARANT?:       string;
}

export type Garantia = {
    ID:                   number;
    credito_usuario_id:   number;
    Garantia?:            number;
    FechaAvaluo?:         Date;
    Deterioro?:           number;
    DeterioroInteres?:    number;
    Contingencia?:        number;
}

export type ReingresosUsuario = {
    ID:               number;
    usuario_id:       number;
    FECHA_REINGRESO?: Date;
    ACTA_REINGRESO?:  string;
}

export type DireccionUsuario = {
    ID:                       number;
    usuario_id:               string;
    TIPO_ZONA?:               string;
    DIRECCION_RESIDENCIA?:    string;
    DIRECCION_LABORAL?:       string;
    DIRECCION_CTA_EXT?:       string;
    CIUDAD_RESIDENCIA?:       string;
    DEPARTAMENTO_RESIDENCIA?: string;
    PAIS_RESIDENCIA?:         string;
    CIUDAD_LABORAL?:          string;
    DEPARTAMENTO_LABORAL?:    string;
    PAIS_LABORAL?:            string;
    CIUDAD_CTA_EXT?:          string;
    PAIS_CTA_EXT?:            string;
    BARRIO?:                  string;
    TELEFONO?:                string;
    TELEFONO_LABORAL?:        string;
    TELEFONO_RESIDENCIA?:     string;
    ADDRESSLINE_CELULAR?:     string;
    ADDRESSLINE_MAIL?:        string;
    BANCO_CTA_EXT?:           string;
    NRO_CTA_EXT?:             string;
    MANEJA_CTA_EN_MONEDA_EXTRANJERA?: boolean;
}

export type Empleo = {
    ID:                       number;
    usuario_id:               string;
    IDENTIFICACION_COMPANIA?: string;
    NOMBRE_COMPANIA?:         string;
    EMPLEO_PRINCIPAL?:        string;
    CARGO_OFICIO?:            string;
    CODIGO_CIIU?:             string;
    DESCRIPCION_CIIU?:        string;
    RELACION_LABORAL?:        string;
    VINCULO_LABORAL?:         string;
    ESTADO_LABORAL?:          string;
    TIPO_CONTRATO?:           string;
    TIPO_SALARIO?:            string;
    SALARIO?:                 number;
    FRECUENCIA_PAGO?:         string;
    FORMA_PAGO?:              string;
}

export type FinanzasPersonales = {
    ID:                             number;
    usuario_id:                     string;
    DESCRIPCION_OTROS_INGRESOS?:    string;
    INGRESOS_OTROS?:                number;
    INGRESOS_ARRIENDOS?:            number;
    INGRESOS_HONORARIOS?:           number;
    INGRESOS_RENDIMIENTOS?:         number;
    ACTIVOS_INMUEBLES?:             number;
    ACTIVOS_INVERSIONES?:           number;
    ACTIVOS_OTROS?:                 number;
    ACTIVOS_VEHICULOS?:             number;
    PASIVOS_OTROS?:                 number;
    GASTOS_CREDITOS?:               number;
    GASTOS_HIPOTECA?:               number;
    GASTOS_OTROS?:                  number;
    GASTOS_FAMILIARES?:             number;
    GASTOS_ARRENDAMIENTO?:          number;
    APORTES?:                       number;
}

export type Rol = {
    ID:           number;
    nombre:       string;
    descripcion?: string;
}

export type UsuarioRol = {
    ID:           number;
    usuario_id:   number;
    rol_id:       number;
}

export type pqr = {
    ID:                       number;
    usuario_id:               number;
    tipoIdentificacion?:      string;
    documentoIdentificacion?: string;
    email?:                   string;
    tipoSolicitante?:         string;
    pais?:                    string;
    estado?:                  string;
    provincia?:               string;
    medioContacto?:           string;
    telefono?:                string;
    movil?:                   string;
    direccion?:               string;
    tipoSolicitud?:           string;
    servicio?:                string;
    titulo?:                  string;
    descripcion?:             string;
    adjunto?:                 Uint8Array;
    createdAt?:               Date;
    updatedAt?:               Date;
}