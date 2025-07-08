import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const usuario_id = parseInt(req.query.usuario_id);

  if (req.method === 'GET') {
    try {
      const data = await prisma.reingresos_usuario.findMany({
        where: { usuario_id },
      });
      res.status(200).json(data);
    } catch {
      res.status(500).json({ error: 'Error al buscar reingresos por usuario' });
    }
  } else {
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
