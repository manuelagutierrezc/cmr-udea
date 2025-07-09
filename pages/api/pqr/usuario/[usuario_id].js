import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { usuario_id } = req.query;

  if (req.method === 'GET') {
    try {
      const data = await prisma.pqr.findMany({ where: { usuario_id } });
      res.status(200).json(data);
    } catch {
      res.status(500).json({ error: 'Error al buscar PQRs por usuario' });
    }
  } else {
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
