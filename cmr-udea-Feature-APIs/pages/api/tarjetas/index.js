import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const tarjetas = await prisma.tarjeta_credito.findMany({
          include: { usuario: true, credito_usuario: true }
        });
        return res.status(200).json(tarjetas);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener tarjetas' });
      }

    case 'POST':
      try {
        const data = req.body;
        const nueva = await prisma.tarjeta_credito.create({ data });
        return res.status(201).json(nueva);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Error al crear tarjeta', detail: error.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
