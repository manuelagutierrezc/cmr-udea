import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const pqr = await prisma.pqr.findUnique({ where: { ID: id } });
        if (!pqr) return res.status(404).json({ error: 'PQR no encontrada' });
        res.status(200).json(pqr);
      } catch {
        res.status(500).json({ error: 'Error al obtener la PQR' });
      }
      break;

    case 'PUT':
      try {
        const { ID, usuario_id, ...data } = req.body;
        const actualizada = await prisma.pqr.update({
          where: { ID: id },
          data,
        });
        res.status(200).json(actualizada);
      } catch {
        res.status(400).json({ error: 'Error al actualizar PQR' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.pqr.delete({ where: { ID: id } });
        res.status(204).end();
      } catch {
        res.status(400).json({ error: 'Error al eliminar PQR' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
