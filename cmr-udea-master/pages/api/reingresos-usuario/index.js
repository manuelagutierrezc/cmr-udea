import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const data = await prisma.reingresos_usuario.findMany();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener reingresos' });
      }
      break;

    case 'POST':
      try {
        const nuevo = await prisma.reingresos_usuario.create({
          data: req.body,
        });
        res.status(201).json(nuevo);
      } catch (error) {
        res.status(400).json({ error: 'Error al crear reingreso' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
