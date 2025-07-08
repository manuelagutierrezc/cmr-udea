import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = parseInt(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const empleo = await prisma.empleo.findUnique({ where: { ID: id } });
        if (!empleo) return res.status(404).json({ error: 'Empleo no encontrado' });
        res.status(200).json(empleo);
      } catch {
        res.status(500).json({ error: 'Error al obtener el empleo' });
      }
      break;

    case 'PUT':
      try {
        const { ID, usuario_id, ...data } = req.body;
        const actualizado = await prisma.empleo.update({
          where: { ID: id },
          data,
        });
        res.status(200).json(actualizado);
      } catch {
        res.status(400).json({ error: 'Error al actualizar el empleo' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.empleo.delete({ where: { ID: id } });
        res.status(204).end();
      } catch {
        res.status(400).json({ error: 'Error al eliminar el empleo' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
