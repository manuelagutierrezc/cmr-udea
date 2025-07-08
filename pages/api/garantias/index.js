import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const garantias = await prisma.garantia.findMany();
        return res.status(200).json(garantias);
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener garantías', detail: error.message });
      }

    case 'POST':
      try {
        const data = req.body;
        // Asegurarse de que no se pase ID
        delete data.ID;
        const nueva = await prisma.garantia.create({ data });
        return res.status(201).json(nueva);
      } catch (error) {
        return res.status(400).json({ error: 'Error al crear garantía', detail: error.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}
