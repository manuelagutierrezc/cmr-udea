import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const item = await prisma.finanzas_personales.findUnique({ where: { ID: id } });
        if (!item) return res.status(404).json({ error: 'Registro no encontrado' });
        res.status(200).json(item);
      } catch {
        res.status(500).json({ error: 'Error al obtener el registro' });
      }
      break;

    case 'PUT':
      try {
        const { ID, usuario_id, ...data } = req.body; // no permitir ID ni usuario_id
        const actualizado = await prisma.finanzas_personales.update({
          where: { ID: id },
          data,
        });
        res.status(200).json(actualizado);
      } catch {
        res.status(400).json({ error: 'Error al actualizar el registro' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.finanzas_personales.delete({ where: { ID: id } });
        res.status(204).end();
      } catch {
        res.status(400).json({ error: 'Error al eliminar el registro' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
