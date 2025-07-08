import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const empleos = await prisma.empleo.findMany();
        res.status(200).json(empleos);
      } catch {
        res.status(500).json({ error: 'Error al obtener los empleos' });
      }
      break;

    case 'POST':
      try {
        const { ID, ...data } = req.body; // Ignorar ID si viene
        const nuevo = await prisma.empleo.create({ data });
        res.status(201).json(nuevo);
      } catch {
        res.status(400).json({ error: 'Error al crear el empleo' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
