import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { credito_usuario_id },
    method,
  } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Método ${method} no permitido`);
  }

  try {
    const garantias = await prisma.garantia.findMany({
      where: { credito_usuario_id: parseInt(credito_usuario_id) },
    });
    return res.status(200).json(garantias);
  } catch (error) {
    return res.status(500).json({ error: 'Error al buscar garantías por credito_usuario_id', detail: error.message });
  }
}
