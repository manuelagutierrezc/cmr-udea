import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { identificacion } = req.query;

  if (req.method === 'GET') {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { IDENTIFICACION: identificacion },
        select: {
          IDENTIFICACION: true,
          credito_prestamo: true,
        },
      });

      if (!usuario || usuario.credito_prestamo.length === 0) {
        return res.status(404).json({ message: 'No se encontraron créditos para este usuario.' });
      }

      return res.status(200).json(usuario.credito_prestamo);
    } catch (error) {
      console.error('Error buscando créditos por identificación:', error);
      return res.status(500).json({ message: 'Error interno del servidor.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
