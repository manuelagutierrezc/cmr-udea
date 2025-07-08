// pages/api/creditos-usuario/index.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const datos = await prisma.credito_usuario.findMany();
        return res.status(200).json(datos);
      } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los datos' });
      }

    case 'POST':
      try {
        const data = req.body;

        // Evitar que el cliente envíe el ID (lo genera la DB)
        if ('ID' in data) delete data.ID;

        const nuevo = await prisma.credito_usuario.create({ data });
        return res.status(201).json(nuevo);
      } catch (error) {
        return res.status(400).json({
          error: 'Error al crear el registro',
          detalle: error.message
        });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${method} no permitido`);
  }
}
