import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const datos = req.body

  const camposRequeridos = [
    "ADDRESSLINE_MAIL",
    "PASSWORD",
    "IDENTIFICACION",
    "TIPO_IDENTIFICACION",
    "ACTA_INGRESO",
    "ESTADO_CIVIL",
    "PAIS_NACIMIENTO",
    "RAZONSOCIAL",
    "PERSONAS_A_CARGO",
    "DEPARTAMENTO_NACIMIENTO",
    "GENERO",
    "MUNICIPIO_NACIMIENTO",
    "PAIS_IDENTIFICACION",
    "DIRECCION_RESIDENCIA",
    "TIPO_VIVIENDA",
    "LUGAR_EXPEDICION",
    "PAIS_RESIDENCIA",
    "ESTRATO",
    "FECHA_NACIMIENTO",
    "DEPARTAMENTO_RESIDENCIA",
    "OCUPACION",
    "FECHA_INGRESO",
    "CIUDAD_RESIDENCIA",
    "NIVEL_ACADEMICO",
    "EDAD",
    "ADDRESSLINE_CELULAR"
  ]

  for (const campo of camposRequeridos) {
    if (!(campo in datos)) {
      return res.status(400).json({ message: `Campo requerido faltante: ${campo}` })
    }
  }

  try {
    const existente = await prisma.usuario.findUnique({
      where: { ADDRESSLINE_MAIL: datos.ADDRESSLINE_MAIL },
    })

    if (existente) {
      return res.status(409).json({ message: 'Correo ya registrado' })
    }

    const camposInt = ["PERSONAS_A_CARGO", "ESTRATO", "EDAD"]

    const camposDate = ["FECHA_NACIMIENTO", "FECHA_INGRESO"]

    for (const campo of camposInt) {
      if (campo in datos) {
        datos[campo] = parseInt(datos[campo])
      }
    }

    for (const campo of camposDate) {
      if (campo in datos) {
        datos[campo] = new Date(datos[campo])
      }
    }

    const hashedPassword = await bcrypt.hash(datos.PASSWORD, 10)

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        ...datos,
        PASSWORD: hashedPassword,
      },
    })

    return res.status(201).json({ message: 'Usuario registrado', userId: nuevoUsuario.ID })
  } catch (error) {
    console.error('Error al registrar:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}
