import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";

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
      include: {
        usuario_rol: {
          include: {
            rol: true,
          },
        },
      },
    });

    if (!usuario || !(await bcrypt.compare(PASSWORD, usuario.PASSWORD))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const info = {
      id: usuario.ID,
      rol: usuario.usuario_rol[0]?.rol?.nombre || "sin rol"
    }

    // Autenticación exitosa
    return res.status(200).json({ info, message: 'Autenticación exitosa' });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}