import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const pqrList = await prisma.pqr.findMany();
        res.status(200).json(pqrList);
      } catch {
        res.status(500).json({ error: 'Error al obtener PQRs' });
      }
      break;

    case 'POST':
      try {
        const { ID, ...body } = req.body; // prevenir uso de ID manual
        const now = new Date(); // The date is temporarily set from here, the prisma schema should be edited
        const nuevo = await prisma.pqr.create({
        data: {
          ...body,
          createdAt: now,
          updatedAt: now,
        },
      });
        res.status(201).json(nuevo);
      } catch (error) {
        console.error("Error al crear PQR:", error);
        res.status(400).json({
          error: 'Error al crear PQR',
          detalle: error instanceof Error ? error.message : String(error),
        });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
