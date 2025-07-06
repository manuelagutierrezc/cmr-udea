const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // Creamos 5 usuarios
  const usuarios = [];
  for (let i = 0; i < 5; i++) {
    const usuario = await prisma.usuario.create({
      data: {
        IDENTIFICACION: faker.string.numeric(10),
        TIPO_IDENTIFICACION: 'CC',
        PASSWORD: 'password',
        PRIMER_NOMBRE: faker.person.firstName(),
        PRIMER_APELLIDO: faker.person.lastName(),
        EDAD: faker.number.int({ min: 18, max: 100 }),
        CLIENTE: true,
        EMPLEADO: false,
        FECHA_NACIMIENTO: faker.date.birthdate(),
        FECHA_INGRESO: faker.date.past(),
        ACTA_INGRESO: `ACTA-${faker.string.numeric(4)}`,
        ESTADO_CIVIL: faker.helpers.arrayElement(['SOLTERO', 'CASADO', 'DIVORCIADO']),
        PERSONAS_A_CARGO: faker.number.int({ min: 0, max: 5 }),
        GENERO: faker.helpers.arrayElement(['MASCULINO', 'FEMENINO', 'OTRO']),
        ESTADO: 'ACTIVO',
        PAIS_NACIMIENTO: faker.location.country(),
        DEPARTAMENTO_NACIMIENTO: faker.location.state(),
        MUNICIPIO_NACIMIENTO: faker.location.city(),
        PAIS_IDENTIFICACION: faker.location.country(),
        PAIS_RESIDENCIA: faker.location.country(),
        DEPARTAMENTO_RESIDENCIA: faker.location.state(),
        CIUDAD_RESIDENCIA: faker.location.city(),
        DIRECCION_RESIDENCIA: faker.location.streetAddress(),
        ESTRATO: faker.number.int({ min: 1, max: 6 }),
        OCUPACION: faker.person.jobTitle(),
        NIVEL_ACADEMICO: faker.helpers.arrayElement(['BACHILLER', 'TÉCNICO', 'UNIVERSITARIO', 'POSGRADO']),
        TIPO_VIVIENDA: faker.helpers.arrayElement(['PROPIA', 'ARRENDADA']),
        ADDRESSLINE_MAIL: faker.internet.email(),
        ADDRESSLINE_CELULAR: faker.phone.number('3#########'),
        LUGAR_EXPEDICION: faker.location.city(),
        RAZONSOCIAL: faker.company.name(),
      },
    });
    usuarios.push(usuario);
  }

  // Por cada usuario, creamos credito_usuario, credito_prestamo, tarjeta_credito, garantia, reingresos_usuario, direccion_usuario, empleo y finanzas_personales
  for (const usuario of usuarios) {
    // Crédito usuario
    const creditoUsuario = await prisma.credito_usuario.create({
      data: {
        TipoIden: 'CC',
        NIT: faker.string.numeric(10),
        CodigoContable: faker.number.int({ min: 1000, max: 9999 }),
        ModificacionesAlCredito: faker.number.float({ min: 0, max: 5 }),
        NroCredito: faker.string.numeric(10),
        FechaDesembolsoInicial: faker.date.past(),
        FechaVencimiento: faker.date.future(),
        Morosidad: faker.number.float({ min: 0, max: 1, precision: 0.01 }),
        TipoCuota: faker.helpers.arrayElement(['Fija', 'Variable']),
        AlturaCuota: faker.number.float({ min: 100, max: 1000 }),
        Amortizacion: faker.number.float({ min: 100, max: 1000 }),
        Modalidad: faker.helpers.arrayElement(['Ordinaria', 'Extraordinaria']),
        TasaInteresEfectiva: faker.number.float({ min: 0, max: 0.3 }),
        ValorPrestamo: faker.number.float({ min: 1000, max: 10000 }),
        ValorCuotaFija: faker.number.float({ min: 100, max: 1000 }),
        SaldoCapital: faker.number.float({ min: 100, max: 5000 }),
        SaldoIntereses: faker.number.float({ min: 50, max: 500 }),
        OtrosSaldos: faker.number.float({ min: 0, max: 300 }),
        ValorMora: faker.number.float({ min: 0, max: 200 }),
        ValosCuotasExtra: faker.number.float({ min: 0, max: 200 }),
        MesesCuotaExtra: faker.number.int({ min: 0, max: 6 }),
        fechaultimopago: faker.date.past(),
      },
    });

    // Crédito préstamo
    const creditoPrestamo = await prisma.credito_prestamo.create({
      data: {
        usuario_id: usuario.IDENTIFICACION,
        credito_usuario_id: creditoUsuario.ID,
        clasegarantia: faker.helpers.arrayElement(['Hipotecaria', 'Prendaria']),
        destinocredito: faker.helpers.arrayElement(['Vivienda', 'Consumo', 'Comercial']),
        CodOficina: faker.string.numeric(3),
        AmortiCapital: faker.number.float({ min: 100, max: 1000 }),
        TipoVivienda: faker.helpers.arrayElement(['Casa', 'Apartamento']),
        VIS: faker.number.float({ min: 0, max: 1 }),
        RangoTipo: faker.helpers.arrayElement(['Alto', 'Medio', 'Bajo']),
        EntidadRedescuento: faker.company.name(),
        MargenRedescuento: faker.number.float({ min: 0, max: 0.5 }),
        Subsidio: faker.helpers.arrayElement(['Sí', 'No']),
        Desembolso: faker.helpers.arrayElement(['Completo', 'Parcial']),
        Moneda: faker.helpers.arrayElement(['COP', 'USD']),
        AportesSociales: faker.number.float({ min: 0, max: 1000 }),
        LineaCredEntidad: faker.string.numeric(4),
        NumModificaciones: faker.number.float({ min: 0, max: 3 }),
        Estadocredito: faker.helpers.arrayElement(['Activo', 'Cerrado']),
        NITPatronal: faker.string.numeric(10),
        NombrePatronal: faker.company.name(),
      },
    });

    // Tarjeta crédito
    await prisma.tarjeta_credito.create({
      data: {
        usuario_id: usuario.IDENTIFICACION,
        credito_usuario_id: creditoUsuario.ID,
        TARJCREDCUPROT: faker.string.numeric(16),
        ENTOTORGARANT: faker.company.name(),
      },
    });

    // Garantía
    await prisma.garantia.create({
      data: {
        credito_usuario_id: creditoUsuario.ID,
        Garantia: faker.number.float({ min: 10000, max: 100000 }),
        FechaAvaluo: faker.date.past(),
        Deterioro: faker.number.float({ min: 0, max: 0.2 }),
        DeterioroInteres: faker.number.float({ min: 0, max: 0.1 }),
        Contingencia: faker.number.float({ min: 0, max: 0.05 }),
      },
    });

    // Reingresos usuario
    await prisma.reingresos_usuario.create({
      data: {
        usuario_id: usuario.ID,
        FECHA_REINGRESO: faker.date.past(),
        ACTA_REINGRESO: `REING-${faker.string.numeric(4)}`,
      },
    });

    // Dirección usuario
    await prisma.direccion_usuario.create({
      data: {
        usuario_id: usuario.IDENTIFICACION,
        TIPO_ZONA: faker.helpers.arrayElement(['Urbana', 'Rural']),
        DIRECCION_RESIDENCIA: faker.location.streetAddress(),
        DIRECCION_LABORAL: faker.location.streetAddress(),
        DIRECCION_CTA_EXT: faker.location.streetAddress(),
        CIUDAD_RESIDENCIA: faker.location.city(),
        DEPARTAMENTO_RESIDENCIA: faker.location.state(),
        PAIS_RESIDENCIA: faker.location.country(),
        CIUDAD_LABORAL: faker.location.city(),
        DEPARTAMENTO_LABORAL: faker.location.state(),
        PAIS_LABORAL: faker.location.country(),
        CIUDAD_CTA_EXT: faker.location.city(),
        PAIS_CTA_EXT: faker.location.country(),
        BARRIO: faker.location.city(),
        TELEFONO: faker.phone.number(),
        TELEFONO_LABORAL: faker.phone.number(),
        TELEFONO_RESIDENCIA: faker.phone.number(),
        ADDRESSLINE_CELULAR: faker.phone.number('3#########'),
        ADDRESSLINE_MAIL: faker.internet.email(),
        BANCO_CTA_EXT: faker.company.name(),
        NRO_CTA_EXT: faker.string.numeric(12),
        MANEJA_CTA_EN_MONEDA_EXTRANJERA: faker.datatype.boolean(),
      },
    });

    // Empleo
    await prisma.empleo.create({
      data: {
        usuario_id: usuario.IDENTIFICACION,
        IDENTIFICACION_COMPANIA: faker.string.numeric(10),
        NOMBRE_COMPANIA: faker.company.name(),
        EMPLEO_PRINCIPAL: faker.datatype.boolean() ? 'Sí' : 'No',
        CARGO_OFICIO: faker.person.jobTitle(),
        CODIGO_CIIU: faker.string.numeric(5),
        DESCRIPCION_CIIU: faker.company.name(),
        RELACION_LABORAL: faker.helpers.arrayElement(['Contrato', 'Indefinido']),
        VINCULO_LABORAL: faker.helpers.arrayElement(['Directo', 'Indirecto']),
        ESTADO_LABORAL: faker.helpers.arrayElement(['Activo', 'Inactivo']),
        TIPO_CONTRATO: faker.helpers.arrayElement(['Fijo', 'Indefinido']),
        SALARIO: faker.number.float({ min: 1000, max: 5000 }),
      },
    });

    // Finanzas personales
    await prisma.finanzas_personales.create({
      data: {
        usuario_id: usuario.IDENTIFICACION,
        DESCRIPCION_OTROS_INGRESOS: faker.lorem.words(3),
        INGRESOS_OTROS: faker.number.float({ min: 0, max: 2000 }),
        INGRESOS_ARRIENDOS: faker.number.float({ min: 0, max: 2000 }),
        INGRESOS_HONORARIOS: faker.number.float({ min: 0, max: 3000 }),
        INGRESOS_RENDIMIENTOS: faker.number.float({ min: 0, max: 1500 }),
        ACTIVOS_INMUEBLES: faker.number.float({ min: 10000, max: 100000 }),
        ACTIVOS_INVERSIONES: faker.number.float({ min: 5000, max: 50000 }),
        ACTIVOS_OTROS: faker.number.float({ min: 1000, max: 10000 }),
        ACTIVOS_VEHICULOS: faker.number.float({ min: 2000, max: 30000 }),
        PASIVOS_OTROS: faker.number.float({ min: 0, max: 10000 }),
        GASTOS_CREDITOS: faker.number.float({ min: 0, max: 3000 }),
        GASTOS_HIPOTECA: faker.number.float({ min: 0, max: 4000 }),
        GASTOS_OTROS: faker.number.float({ min: 0, max: 2000 }),
        GASTOS_FAMILIARES: faker.number.float({ min: 0, max: 5000 }),
        GASTOS_ARRENDAMIENTO: faker.number.float({ min: 0, max: 3000 }),
        APORTES: faker.number.float({ min: 0, max: 1000 }),
      },
    });
  }

  console.log('✔ Seed completa creada con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
