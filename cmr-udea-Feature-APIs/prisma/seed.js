const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {

  for (let i = 0; i < 5; i++) {
    await prisma.usuario.create({
      data: {
        IDENTIFICACION: faker.string.numeric(10),
        TIPO_IDENTIFICACION: 'CC',
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
  }

  console.log('✔ Usuarios generados con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
