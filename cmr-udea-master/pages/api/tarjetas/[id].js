import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const tarjetaId = parseInt(id);

  switch (method) {
    case 'GET':
      // Obtener tarjeta por ID
      try {
        const tarjeta = await prisma.tarjeta_credito.findUnique({
          where: { ID: tarjetaId },
        });

        if (!tarjeta) {
          return res.status(404).json({ error: 'Tarjeta no encontrada' });
        }

        return res.status(200).json(tarjeta);
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener tarjeta' });
      }

    case 'PUT':
      // Actualizar tarjeta (sin modificar campos protegidos)
      try {
        const { ID, usuario_id, credito_usuario_id, ...rest } = req.body;

        const updated = await prisma.tarjeta_credito.update({
          where: { ID: tarjetaId },
          data: rest,
        });

        return res.status(200).json(updated);
      } catch (error) {
        return res.status(400).json({
          error: 'Error al actualizar tarjeta',
          detail: error.message,
        });
      }

    case 'DELETE':
      // Eliminar tarjeta
      try {
        await prisma.tarjeta_credito.delete({
          where: { ID: tarjetaId },
        });

        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar tarjeta' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
