import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const data = await prisma.finanzas_personales.findMany();
        res.status(200).json(data);
      } catch {
        res.status(500).json({ error: 'Error al obtener registros financieros' });
      }
      break;

    case 'POST':
      try {
        const { ID, ...data } = req.body; // evitar ID manual
        if (!data.usuario_id) {
          return res.status(400).json({ error: 'usuario_id es requerido' });
        }

        const nuevo = await prisma.finanzas_personales.create({ data });
        res.status(201).json(nuevo);
      } catch (error) {
        res.status(400).json({ error: 'Error al crear registro financiero' });
      }
      break;

    default:
      res.status(405).end(`Método ${req.method} no permitido`);
  }
}
