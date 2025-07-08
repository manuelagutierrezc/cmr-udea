import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const ID = parseInt(id);

  switch (method) {
    case 'GET':
      try {
        const garantia = await prisma.garantia.findUnique({ where: { ID } });
        if (!garantia) return res.status(404).json({ error: 'Garantía no encontrada' });
        return res.status(200).json(garantia);
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener garantía', detail: error.message });
      }

    case 'PUT':
      try {
        const data = req.body;
        // No permitir modificar claves
        delete data.ID;
        delete data.credito_usuario_id;
        const actualizada = await prisma.garantia.update({
          where: { ID },
          data,
        });
        return res.status(200).json(actualizada);
      } catch (error) {
        return res.status(400).json({ error: 'Error al actualizar garantía', detail: error.message });
      }

    case 'DELETE':
      try {
        await prisma.garantia.delete({ where: { ID } });
        return res.status(204).end();
      } catch (error) {
        return res.status(400).json({ error: 'Error al eliminar garantía', detail: error.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
