-- CreateTable
CREATE TABLE "usuario" (
    "ID" SERIAL NOT NULL,
    "TIPO_IDENTIFICACION" TEXT NOT NULL,
    "ACTA_INGRESO" TEXT NOT NULL,
    "IDENTIFICACION" TEXT NOT NULL,
    "ESTADO_CIVIL" TEXT NOT NULL,
    "PAIS_NACIMIENTO" TEXT NOT NULL,
    "RAZONSOCIAL" TEXT NOT NULL,
    "PERSONAS_A_CARGO" INTEGER NOT NULL,
    "DEPARTAMENTO_NACIMIENTO" TEXT NOT NULL,
    "GENERO" TEXT NOT NULL,
    "ADDRESSLINE_MAIL" TEXT NOT NULL,
    "MUNICIPIO_NACIMIENTO" TEXT NOT NULL,
    "PAIS_IDENTIFICACION" TEXT NOT NULL,
    "DIRECCION_RESIDENCIA" TEXT NOT NULL,
    "TIPO_VIVIENDA" TEXT NOT NULL,
    "LUGAR_EXPEDICION" TEXT NOT NULL,
    "PAIS_RESIDENCIA" TEXT NOT NULL,
    "ESTRATO" INTEGER NOT NULL,
    "FECHA_NACIMIENTO" TIMESTAMP(3) NOT NULL,
    "DEPARTAMENTO_RESIDENCIA" TEXT NOT NULL,
    "OCUPACION" TEXT NOT NULL,
    "FECHA_INGRESO" TIMESTAMP(3) NOT NULL,
    "CIUDAD_RESIDENCIA" TEXT NOT NULL,
    "NIVEL_ACADEMICO" TEXT NOT NULL,
    "EDAD" INTEGER NOT NULL,
    "ADDRESSLINE_CELULAR" TEXT NOT NULL,
    "CODIGO_VERIFICACION" TEXT,
    "CLIENTE" BOOLEAN,
    "TERCERO" BOOLEAN,
    "CODEUCOR_NA" TEXT,
    "EMPLEADO" BOOLEAN,
    "ASOCIADO" BOOLEAN,
    "PROVEEDOR" BOOLEAN,
    "PRIMER_NOMBRE" TEXT,
    "SEGUNDO_NOMBRE" TEXT,
    "PRIMER_APELLIDO" TEXT,
    "SEGUNDO_APELLIDO" TEXT,
    "SUCURSAL" TEXT,
    "ESTADO" TEXT,
    "ULTIMA_ACTUALIZACION" TIMESTAMP(3),
    "NACIONALIDAD" TEXT,
    "NUMERO_HIJOS" INTEGER,
    "MAXIMO_TITULO" TEXT,
    "CONYUGUE" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "credito_usuario" (
    "ID" SERIAL NOT NULL,
    "TipoIden" TEXT,
    "NIT" TEXT,
    "CodigoContable" INTEGER,
    "ModificacionesAlCredito" DOUBLE PRECISION,
    "NroCredito" TEXT,
    "FechaDesembolsoInicial" TIMESTAMP(3),
    "FechaVencimiento" TIMESTAMP(3),
    "Morosidad" DOUBLE PRECISION,
    "TipoCuota" TEXT,
    "AlturaCuota" DOUBLE PRECISION,
    "Amortizacion" DOUBLE PRECISION,
    "Modalidad" TEXT,
    "TasaInteresEfectiva" DOUBLE PRECISION,
    "ValorPrestamo" DOUBLE PRECISION,
    "ValorCuotaFija" DOUBLE PRECISION,
    "SaldoCapital" DOUBLE PRECISION,
    "SaldoIntereses" DOUBLE PRECISION,
    "OtrosSaldos" DOUBLE PRECISION,
    "ValorMora" DOUBLE PRECISION,
    "ValosCuotasExtra" DOUBLE PRECISION,
    "MesesCuotaExtra" DOUBLE PRECISION,
    "fechaultimopago" TIMESTAMP(3),

    CONSTRAINT "credito_usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "credito_prestamo" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "credito_usuario_id" INTEGER,
    "clasegarantia" TEXT,
    "destinocredito" TEXT,
    "CodOficina" TEXT,
    "AmortiCapital" DOUBLE PRECISION,
    "TipoVivienda" TEXT,
    "VIS" DOUBLE PRECISION,
    "RangoTipo" TEXT,
    "EntidadRedescuento" TEXT,
    "MargenRedescuento" DOUBLE PRECISION,
    "Subsidio" TEXT,
    "Desembolso" TEXT,
    "Moneda" TEXT,
    "AportesSociales" DOUBLE PRECISION,
    "LineaCredEntidad" TEXT,
    "NumModificaciones" DOUBLE PRECISION,
    "Estadocredito" TEXT,
    "NITPatronal" TEXT,
    "NombrePatronal" TEXT,

    CONSTRAINT "credito_prestamo_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "tarjeta_credito" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "credito_usuario_id" INTEGER,
    "TARJCREDCUPROT" TEXT,
    "ENTOTORGARANT" TEXT,

    CONSTRAINT "tarjeta_credito_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "garantia" (
    "ID" SERIAL NOT NULL,
    "credito_usuario_id" INTEGER NOT NULL,
    "Garantia" DOUBLE PRECISION,
    "FechaAvaluo" TIMESTAMP(3),
    "Deterioro" DOUBLE PRECISION,
    "DeterioroInteres" DOUBLE PRECISION,
    "Contingencia" DOUBLE PRECISION,

    CONSTRAINT "garantia_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "reingresos_usuario" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "FECHA_REINGRESO" TIMESTAMP(3),
    "ACTA_REINGRESO" TEXT,

    CONSTRAINT "reingresos_usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "direccion_usuario" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "TIPO_ZONA" TEXT,
    "DIRECCION_RESIDENCIA" TEXT,
    "DIRECCION_LABORAL" TEXT,
    "DIRECCION_CTA_EXT" TEXT,
    "CIUDAD_RESIDENCIA" TEXT,
    "DEPARTAMENTO_RESIDENCIA" TEXT,
    "PAIS_RESIDENCIA" TEXT,
    "CIUDAD_LABORAL" TEXT,
    "DEPARTAMENTO_LABORAL" TEXT,
    "PAIS_LABORAL" TEXT,
    "CIUDAD_CTA_EXT" TEXT,
    "PAIS_CTA_EXT" TEXT,
    "BARRIO" TEXT,
    "TELEFONO" TEXT,
    "TELEFONO_LABORAL" TEXT,
    "TELEFONO_RESIDENCIA" TEXT,
    "ADDRESSLINE_CELULAR" TEXT,
    "ADDRESSLINE_MAIL" TEXT,
    "BANCO_CTA_EXT" TEXT,
    "NRO_CTA_EXT" TEXT,
    "MANEJA_CTA_EN_MONEDA_EXTRANJERA" BOOLEAN,

    CONSTRAINT "direccion_usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "empleo" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "IDENTIFICACION_COMPANIA" TEXT,
    "NOMBRE_COMPANIA" TEXT,
    "EMPLEO_PRINCIPAL" TEXT,
    "CARGO_OFICIO" TEXT,
    "CODIGO_CIIU" TEXT,
    "DESCRIPCION_CIIU" TEXT,
    "RELACION_LABORAL" TEXT,
    "VINCULO_LABORAL" TEXT,
    "ESTADO_LABORAL" TEXT,
    "TIPO_CONTRATO" TEXT,
    "TIPO_SALARIO" TEXT,
    "SALARIO" DOUBLE PRECISION,
    "FRECUENCIA_PAGO" TEXT,
    "FORMA_PAGO" TEXT,

    CONSTRAINT "empleo_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "finanzas_personales" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "DESCRIPCION_OTROS_INGRESOS" TEXT,
    "INGRESOS_OTROS" DOUBLE PRECISION,
    "INGRESOS_ARRIENDOS" DOUBLE PRECISION,
    "INGRESOS_HONORARIOS" DOUBLE PRECISION,
    "INGRESOS_RENDIMIENTOS" DOUBLE PRECISION,
    "ACTIVOS_INMUEBLES" DOUBLE PRECISION,
    "ACTIVOS_INVERSIONES" DOUBLE PRECISION,
    "ACTIVOS_OTROS" DOUBLE PRECISION,
    "ACTIVOS_VEHICULOS" DOUBLE PRECISION,
    "PASIVOS_OTROS" DOUBLE PRECISION,
    "GASTOS_CREDITOS" DOUBLE PRECISION,
    "GASTOS_HIPOTECA" DOUBLE PRECISION,
    "GASTOS_OTROS" DOUBLE PRECISION,
    "GASTOS_FAMILIARES" DOUBLE PRECISION,
    "GASTOS_ARRENDAMIENTO" DOUBLE PRECISION,
    "APORTES" DOUBLE PRECISION,

    CONSTRAINT "finanzas_personales_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "rol" (
    "ID" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "usuario_rol" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "rol_id" INTEGER NOT NULL,

    CONSTRAINT "usuario_rol_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "pqr" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "tipoIdentificacion" TEXT,
    "documentoIdentificacion" TEXT,
    "email" TEXT,
    "tipoSolicitante" TEXT,
    "pais" TEXT,
    "estado" TEXT,
    "provincia" TEXT,
    "medioContacto" TEXT,
    "telefono" TEXT,
    "movil" TEXT,
    "direccion" TEXT,
    "tipoSolicitud" TEXT,
    "servicio" TEXT,
    "titulo" TEXT,
    "descripcion" TEXT,
    "adjunto" BYTEA,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "pqr_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_IDENTIFICACION_key" ON "usuario"("IDENTIFICACION");

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombre_key" ON "rol"("nombre");

-- AddForeignKey
ALTER TABLE "credito_prestamo" ADD CONSTRAINT "credito_prestamo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credito_prestamo" ADD CONSTRAINT "credito_prestamo_credito_usuario_id_fkey" FOREIGN KEY ("credito_usuario_id") REFERENCES "credito_usuario"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarjeta_credito" ADD CONSTRAINT "tarjeta_credito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarjeta_credito" ADD CONSTRAINT "tarjeta_credito_credito_usuario_id_fkey" FOREIGN KEY ("credito_usuario_id") REFERENCES "credito_usuario"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garantia" ADD CONSTRAINT "garantia_credito_usuario_id_fkey" FOREIGN KEY ("credito_usuario_id") REFERENCES "credito_usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reingresos_usuario" ADD CONSTRAINT "reingresos_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direccion_usuario" ADD CONSTRAINT "direccion_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleo" ADD CONSTRAINT "empleo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finanzas_personales" ADD CONSTRAINT "finanzas_personales_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_rol" ADD CONSTRAINT "usuario_rol_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_rol" ADD CONSTRAINT "usuario_rol_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pqr" ADD CONSTRAINT "pqr_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
