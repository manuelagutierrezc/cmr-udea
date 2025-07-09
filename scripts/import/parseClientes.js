// scripts/import/parseClientes.js

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(customParseFormat);

const prisma = new PrismaClient();
const csvPath = path.join(process.cwd(), 'csv', 'ReporteClientesDetallado.csv');

function parseFecha(fechaStr) {
  if (!fechaStr || typeof fechaStr !== 'string') return null;
  const parsed = dayjs(fechaStr.trim(), 'DD/MM/YYYY', true);
  return parsed.isValid() ? parsed.toDate() : null;
}

console.log('Iniciando importación de ReporteClientesDetallado.csv');

async function main() {
  const results = [];
  let procesados = 0;
  let ignorados = 0;

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => results.push(row))
      .on('end', async () => {
        for (const row of results) {
          const identificacion = row.IDENTIFICACION?.trim();
          const mail = row.ADDRESSLINE_MAIL?.trim();

          if (!identificacion || !mail) {
            ignorados++;
            continue;
          }

          try {
            await prisma.usuario.upsert({
              where: { IDENTIFICACION: identificacion },
              update: {
                TIPO_IDENTIFICACION: row.TIPO_IDENTIFICACION?.trim(),
                ACTA_INGRESO: row.ACTA_INGRESO?.trim(),
                PASSWORD: 'password123',
                ESTADO_CIVIL: row.ESTADO_CIVIL?.trim(),
                PAIS_NACIMIENTO: row.PAIS_NACIMIENTO?.trim(),
                RAZONSOCIAL: row.RAZONSOCIAL?.trim(),
                PERSONAS_A_CARGO: parseInt(row.PERSONAS_A_CARGO) || 0,
                DEPARTAMENTO_NACIMIENTO: row.DEPARTAMENTO_NACIMIENTO?.trim(),
                GENERO: row.GENERO?.trim(),
                ADDRESSLINE_MAIL: mail,
                MUNICIPIO_NACIMIENTO: row.MUNICIPIO_NACIMIENTO?.trim(),
                PAIS_IDENTIFICACION: row.PAIS_IDENTIFICACION?.trim(),
                DIRECCION_RESIDENCIA: row.DIRECCION_RESIDENCIA?.trim(),
                TIPO_VIVIENDA: row.TIPO_VIVIENDA?.trim(),
                LUGAR_EXPEDICION: row.LUGAR_EXPEDICION?.trim(),
                PAIS_RESIDENCIA: row.PAIS_RESIDENCIA?.trim(),
                ESTRATO: parseInt(row.ESTRATO) || 0,
                FECHA_NACIMIENTO: parseFecha(row.FECHA_NACIMIENTO)|| new Date(),
                DEPARTAMENTO_RESIDENCIA: row.DEPARTAMENTO_RESIDENCIA?.trim(),
                OCUPACION: row.OCUPACION?.trim(),
                FECHA_INGRESO: parseFecha(row.FECHA_INGRESO) || new Date(),
                CIUDAD_RESIDENCIA: row.CIUDAD_RESIDENCIA?.trim(),
                NIVEL_ACADEMICO: row.NIVEL_ACADEMICO?.trim(),
                EDAD: parseInt(row.EDAD) || 0,
                ADDRESSLINE_CELULAR: row.ADDRESSLINE_CELULAR?.trim(),
                // campos opcionales
                CODIGO_VERIFICACION: row.CODIGO_VERIFICACION?.trim() || null,
                CLIENTE: row.CLIENTE === 'SI',
                TERCERO: row.TERCERO === 'SI',
                CODEUCOR_NA: row.CODEUCOR_NA?.trim() || null,
                EMPLEADO: row.EMPLEADO === 'SI',
                ASOCIADO: row.ASOCIADO === 'SI',
                PROVEEDOR: row.PROVEEDOR === 'SI',
                PRIMER_NOMBRE: row.PRIMER_NOMBRE?.trim() || null,
                SEGUNDO_NOMBRE: row.SEGUNDO_NOMBRE?.trim() || null,
                PRIMER_APELLIDO: row.PRIMER_APELLIDO?.trim() || null,
                SEGUNDO_APELLIDO: row.SEGUNDO_APELLIDO?.trim() || null,
                SUCURSAL: row.SUCURSAL?.trim() || null,
                ESTADO: row.ESTADO?.trim() || null,
                ULTIMA_ACTUALIZACION: parseFecha(row.ULTIMA_ACTUALIZACION)|| new Date(),
                NACIONALIDAD: row.NACIONALIDAD?.trim() || null,
                NUMERO_HIJOS: parseInt(row.NUMERO_HIJOS) || 0,
                MAXIMO_TITULO: row.MAXIMO_TITULO?.trim() || null,
                CONYUGUE: row.CONYUGUE?.trim() || null,
              },
              create: {
                IDENTIFICACION: identificacion,
                TIPO_IDENTIFICACION: row.TIPO_IDENTIFICACION?.trim(),
                ACTA_INGRESO: row.ACTA_INGRESO?.trim(),
                PASSWORD: 'password123',
                ESTADO_CIVIL: row.ESTADO_CIVIL?.trim(),
                PAIS_NACIMIENTO: row.PAIS_NACIMIENTO?.trim(),
                RAZONSOCIAL: row.RAZONSOCIAL?.trim(),
                PERSONAS_A_CARGO: parseInt(row.PERSONAS_A_CARGO) || 0,
                DEPARTAMENTO_NACIMIENTO: row.DEPARTAMENTO_NACIMIENTO?.trim(),
                GENERO: row.GENERO?.trim(),
                ADDRESSLINE_MAIL: mail,
                MUNICIPIO_NACIMIENTO: row.MUNICIPIO_NACIMIENTO?.trim(),
                PAIS_IDENTIFICACION: row.PAIS_IDENTIFICACION?.trim(),
                DIRECCION_RESIDENCIA: row.DIRECCION_RESIDENCIA?.trim(),
                TIPO_VIVIENDA: row.TIPO_VIVIENDA?.trim(),
                LUGAR_EXPEDICION: row.LUGAR_EXPEDICION?.trim(),
                PAIS_RESIDENCIA: row.PAIS_RESIDENCIA?.trim(),
                ESTRATO: parseInt(row.ESTRATO) || 0,
                FECHA_NACIMIENTO: parseFecha(row.FECHA_NACIMIENTO)|| new Date(),
                DEPARTAMENTO_RESIDENCIA: row.DEPARTAMENTO_RESIDENCIA?.trim(),
                OCUPACION: row.OCUPACION?.trim(),
                FECHA_INGRESO: parseFecha(row.FECHA_INGRESO) || new Date(),
                CIUDAD_RESIDENCIA: row.CIUDAD_RESIDENCIA?.trim(),
                NIVEL_ACADEMICO: row.NIVEL_ACADEMICO?.trim(),
                EDAD: parseInt(row.EDAD) || 0,
                ADDRESSLINE_CELULAR: row.ADDRESSLINE_CELULAR?.trim(),
                // campos opcionales
                CODIGO_VERIFICACION: row.CODIGO_VERIFICACION?.trim() || null,
                CLIENTE: row.CLIENTE === 'SI',
                TERCERO: row.TERCERO === 'SI',
                CODEUCOR_NA: row.CODEUCOR_NA?.trim() || null,
                EMPLEADO: row.EMPLEADO === 'SI',
                ASOCIADO: row.ASOCIADO === 'SI',
                PROVEEDOR: row.PROVEEDOR === 'SI',
                PRIMER_NOMBRE: row.PRIMER_NOMBRE?.trim() || null,
                SEGUNDO_NOMBRE: row.SEGUNDO_NOMBRE?.trim() || null,
                PRIMER_APELLIDO: row.PRIMER_APELLIDO?.trim() || null,
                SEGUNDO_APELLIDO: row.SEGUNDO_APELLIDO?.trim() || null,
                SUCURSAL: row.SUCURSAL?.trim() || null,
                ESTADO: row.ESTADO?.trim() || null,
                ULTIMA_ACTUALIZACION: parseFecha(row.ULTIMA_ACTUALIZACION),
                NACIONALIDAD: row.NACIONALIDAD?.trim() || null,
                NUMERO_HIJOS: parseInt(row.NUMERO_HIJOS) || 0,
                MAXIMO_TITULO: row.MAXIMO_TITULO?.trim() || null,
                CONYUGUE: row.CONYUGUE?.trim() || null,
              },
            });
            procesados++;
          } catch (err) {
            console.error(`Error al procesar ${identificacion}:`, err.message);
            ignorados++;
          }
        }

        console.log(`Importación finalizada. Procesados: ${procesados}, Ignorados: ${ignorados}`);
        resolve();
      })
      .on('error', (err) => {
        console.error('Error al leer el archivo:', err);
        reject(err);
      });
  });
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
