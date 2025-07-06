import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const pk = parseInt(id, 10);

  if (isNaN(pk)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  switch (method) {
    case 'GET':
      try {
        const credito = await prisma.credito_prestamo.findUnique({
          where: { ID: pk },
          include: {
            usuario: true,
            credito_usuario: true,
          },
        });

        if (!credito) {
          return res.status(404).json({ error: 'Crédito no encontrado' });
        }

        return res.status(200).json(credito);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener el crédito' });
      }

    case 'PUT':
      try {
        const data = req.body;

        // Evitar modificación de claves
        delete data.ID;
        delete data.usuario_id;
        delete data.credito_usuario_id;

        const updated = await prisma.credito_prestamo.update({
          where: { ID: pk },
          data,
        });

        return res.status(200).json(updated);
      } catch (error) {
        console.error(error);
        return res.status(400).json({
          error: 'Error al actualizar el crédito',
          detail: error.message,
        });
      }

    case 'DELETE':
      try {
        await prisma.credito_prestamo.delete({
          where: { ID: pk },
        });

        return res.status(200).json({ message: 'Crédito eliminado correctamente' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar el crédito' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
