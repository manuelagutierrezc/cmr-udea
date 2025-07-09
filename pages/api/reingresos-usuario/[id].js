import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const reingreso = await prisma.reingresos_usuario.findUnique({ where: { ID: id } });
        if (!reingreso) return res.status(404).json({ error: 'Reingreso no encontrado' });
        res.status(200).json(reingreso);
      } catch {
        res.status(500).json({ error: 'Error al obtener el reingreso' });
      }
      break;

    case 'PUT':
      try {
        const actualizado = await prisma.reingresos_usuario.update({
          where: { ID: id },
          data: req.body,
        });
        res.status(200).json(actualizado);
      } catch {
        res.status(400).json({ error: 'Error al actualizar el reingreso' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.reingresos_usuario.delete({ where: { ID: id } });
        res.status(204).end();
      } catch {
        res.status(400).json({ error: 'Error al eliminar el reingreso' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
