/*
  Warnings:

  - A unique constraint covering the columns `[ADDRESSLINE_MAIL]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuario_ADDRESSLINE_MAIL_key" ON "usuario"("ADDRESSLINE_MAIL");
