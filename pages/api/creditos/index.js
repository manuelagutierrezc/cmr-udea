import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Listar todos los créditos
      try {
        const creditos = await prisma.credito_prestamo.findMany({
          include: { credito_usuario: true, usuario: true }
        });
        return res.status(200).json(creditos);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener créditos' });
      }

    case 'POST':
      // Crear un nuevo crédito
      try {
        const data = req.body;
        const nuevo = await prisma.credito_prestamo.create({ data });
        return res.status(201).json(nuevo);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Error al crear crédito', detail: error.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Método ${method} no permitido`);
  }
}