/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `rol` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[IDENTIFICACION]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Made the column `IDENTIFICACION` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "IDENTIFICACION" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombre_key" ON "rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_IDENTIFICACION_key" ON "usuario"("IDENTIFICACION");
