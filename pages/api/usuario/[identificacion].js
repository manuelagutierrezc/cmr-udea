

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    method,
    query: { identificacion },
  } = req;

  if (method !== 'GET') {
    return res.status(405).json({ error: `Método ${method} no permitido` });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { IDENTIFICACION: identificacion },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
