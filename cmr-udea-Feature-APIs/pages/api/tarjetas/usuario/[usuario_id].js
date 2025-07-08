import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { usuario_id },
    method,
  } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Método ${method} no permitido`);
  }

  try {
    const tarjetas = await prisma.tarjeta_credito.findMany({
      where: {
        usuario_id: String(usuario_id),
      },
    });

    if (tarjetas.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron tarjetas para este usuario' });
    }

    return res.status(200).json(tarjetas);
  } catch (error) {
    return res.status(500).json({
      error: 'Error al buscar tarjetas',
      detalle: error.message,
    });
  }
}
