// pages/api/creditos-usuario/[id].js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const pk = parseInt(id);

  if (isNaN(pk)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  switch (method) {
    case 'GET':
      try {
        const data = await prisma.credito_usuario.findUnique({ where: { ID: pk } });
        if (!data) return res.status(404).json({ error: 'No encontrado' });
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el registro' });
      }

    case 'PUT':
      try {
        const updateData = req.body;

        // Evitar modificar ID
        delete updateData.ID;

        const actualizado = await prisma.credito_usuario.update({
          where: { ID: pk },
          data: updateData,
        });

        return res.status(200).json(actualizado);
      } catch (error) {
        return res.status(400).json({ error: 'Error al actualizar', detalle: error.message });
      }

    case 'DELETE':
      try {
        await prisma.credito_usuario.delete({ where: { ID: pk } });
        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
