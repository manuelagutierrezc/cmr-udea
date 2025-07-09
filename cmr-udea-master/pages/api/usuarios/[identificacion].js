// pages/api/usuarios/[identificacion].js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { identificacion },
  } = req;

  if (!identificacion || typeof identificacion !== 'string') {
    return res.status(400).json({ error: 'IDENTIFICACION inválida' });
  }

  switch (method) {
    case 'GET':
      try {
        const usuario = await prisma.usuario.findUnique({
          where: { IDENTIFICACION: identificacion },
          select: {
            // omitir PASSWORD
            ID: true,
            TIPO_IDENTIFICACION: true,
            ACTA_INGRESO: true,
            IDENTIFICACION: true,
            ESTADO_CIVIL: true,
            PAIS_NACIMIENTO: true,
            RAZONSOCIAL: true,
            PERSONAS_A_CARGO: true,
            DEPARTAMENTO_NACIMIENTO: true,
            GENERO: true,
            ADDRESSLINE_MAIL: true,
            MUNICIPIO_NACIMIENTO: true,
            PAIS_IDENTIFICACION: true,
            DIRECCION_RESIDENCIA: true,
            TIPO_VIVIENDA: true,
            LUGAR_EXPEDICION: true,
            PAIS_RESIDENCIA: true,
            ESTRATO: true,
            FECHA_NACIMIENTO: true,
            DEPARTAMENTO_RESIDENCIA: true,
            OCUPACION: true,
            FECHA_INGRESO: true,
            CIUDAD_RESIDENCIA: true,
            NIVEL_ACADEMICO: true,
            EDAD: true,
            ADDRESSLINE_CELULAR: true,
            CODIGO_VERIFICACION: true,
            CLIENTE: true,
            TERCERO: true,
            CODEUCOR_NA: true,
            EMPLEADO: true,
            ASOCIADO: true,
            PROVEEDOR: true,
            PRIMER_NOMBRE: true,
            SEGUNDO_NOMBRE: true,
            PRIMER_APELLIDO: true,
            SEGUNDO_APELLIDO: true,
            SUCURSAL: true,
            ESTADO: true,
            ULTIMA_ACTUALIZACION: true,
            NACIONALIDAD: true,
            NUMERO_HIJOS: true,
            MAXIMO_TITULO: true,
            CONYUGUE: true,
          },
        });

        if (!usuario) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(usuario);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
      }
      break;

    case 'PUT':
      try {
        const data = req.body;

        // proteger campo PASSWORD
        if ('PASSWORD' in data) delete data.PASSWORD;
        if ('IDENTIFICACION' in data) delete data.IDENTIFICACION;

        const usuarioActualizado = await prisma.usuario.update({
          where: { IDENTIFICACION: identificacion },
          data,
        });

        const { PASSWORD, ...rest } = usuarioActualizado;
        res.status(200).json(rest);
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.usuario.delete({
          where: { IDENTIFICACION: identificacion },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Método ${method} no permitido`);
  }
}
