import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const usuarios = await prisma.usuario.findMany();
        const usuariosSinPassword = usuarios.map(({ PASSWORD, ...rest }) => rest);
        res.status(200).json(usuariosSinPassword);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
      }
      break;

    case 'POST':
      try {
        const data = req.body;
        const nuevoUsuario = await prisma.usuario.create({ data });
        res.status(201).json(nuevoUsuario);
      } catch (error) {
        res.status(400).json({ error: 'Error al crear usuario', detalle: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${method} no permitido`);
  }
}
