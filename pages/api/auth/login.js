
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} no permitido`);
  }

  const { ADDRESSLINE_MAIL, PASSWORD } = req.body;

  if (!ADDRESSLINE_MAIL || !PASSWORD) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { ADDRESSLINE_MAIL },
    });

    if (!usuario || usuario.PASSWORD !== PASSWORD) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Autenticación exitosa
    return res.status(200).json({ message: 'Autenticación exitosa' });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}