/*
  Warnings:

  - Added the required column `PASSWORD` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "PASSWORD" TEXT NOT NULL;
