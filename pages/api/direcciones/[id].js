import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const direccion = await prisma.direccion_usuario.findUnique({ where: { ID: id } });
        if (!direccion) return res.status(404).json({ error: 'Dirección no encontrada' });
        res.status(200).json(direccion);
      } catch {
        res.status(500).json({ error: 'Error al obtener la dirección' });
      }
      break;

    case 'PUT':
      try {
        // Filtrar campos prohibidos
        const { ID, id: bodyId, usuario_id, ...resto } = req.body;

        const actualizada = await prisma.direccion_usuario.update({
          where: { ID: id },
          data: resto,
        });
        res.status(200).json(actualizada);
      } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la dirección' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.direccion_usuario.delete({ where: { ID: id } });
        res.status(204).end();
      } catch {
        res.status(400).json({ error: 'Error al eliminar la dirección' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
