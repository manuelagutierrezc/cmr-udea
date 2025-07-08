import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const data = await prisma.direccion_usuario.findMany();
        res.status(200).json(data);
      } catch {
        res.status(500).json({ error: 'Error al obtener direcciones' });
      }
      break;

    case 'POST':
      try {
        const { ID, ...datosSinID } = req.body; // Elimina ID si fue enviado
        const nueva = await prisma.direccion_usuario.create({ data: datosSinID });
        res.status(201).json(nueva);
      } catch (error) {
        res.status(400).json({ error: 'Error al crear dirección' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
