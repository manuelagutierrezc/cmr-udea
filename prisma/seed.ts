import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear roles
  const adminRole = await prisma.rol.upsert({
    where: { nombre: 'ADMIN' },
    update: {},
    create: {
      nombre: 'ADMIN',
      descripcion: 'Administrador con todos los permisos',
    },
  });

  const userRole = await prisma.rol.upsert({
    where: { nombre: 'USER' },
    update: {},
    create: {
      nombre: 'USER',
      descripcion: 'Usuario estándar',
    },
  });

  // Crear usuarios
  const usuario1 = await prisma.usuario.upsert({
    where: { IDENTIFICACION: '123456789' },
    update: {},
    create: {
      IDENTIFICACION: '123456789',
      PRIMER_NOMBRE: 'Juan',
      PRIMER_APELLIDO: 'Pérez',
      CLIENTE: true,
      EMPLEADO: false,
      FECHA_NACIMIENTO: new Date('1980-01-01'),
      ESTADO: 'Activo',
    },
  });

  const usuario2 = await prisma.usuario.upsert({
    where: { IDENTIFICACION: '987654321' },
    update: {},
    create: {
      IDENTIFICACION: '987654321',
      PRIMER_NOMBRE: 'Ana',
      PRIMER_APELLIDO: 'Gómez',
      CLIENTE: true,
      EMPLEADO: true,
      FECHA_NACIMIENTO: new Date('1990-05-15'),
      ESTADO: 'Activo',
    },
  });

  // Asignar roles a usuarios
  await prisma.usuario_rol.createMany({
    data: [
      {
        usuario_id: usuario1.ID,
        rol_id: userRole.ID,
      },
      {
        usuario_id: usuario2.ID,
        rol_id: adminRole.ID,
      },
    ],
    skipDuplicates: true,
  });

  // Insertar una direccion para usuario1
  await prisma.direccion_usuario.create({
    data: {
      usuario_id: usuario1.ID,
      TIPO_ZONA: 'Urbana',
      DIRECCION_RESIDENCIA: 'Calle 123 #45-67',
      CIUDAD_RESIDENCIA: 'Medellín',
      DEPARTAMENTO_RESIDENCIA: 'Antioquia',
      PAIS_RESIDENCIA: 'Colombia',
      TELEFONO: '3001234567',
      ADDRESSLINE_MAIL: 'juan.perez@example.com',
    },
  });

  console.log('Seed ejecutado correctamente');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
