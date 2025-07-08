-- DropForeignKey
ALTER TABLE "credito_prestamo" DROP CONSTRAINT "credito_prestamo_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "datacredito" DROP CONSTRAINT "datacredito_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "direccion_usuario" DROP CONSTRAINT "direccion_usuario_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "empleo" DROP CONSTRAINT "empleo_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "finanzas_personales" DROP CONSTRAINT "finanzas_personales_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "pqr" DROP CONSTRAINT "pqr_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "tarjeta_credito" DROP CONSTRAINT "tarjeta_credito_usuario_id_fkey";

-- AlterTable
ALTER TABLE "credito_prestamo" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "datacredito" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "direccion_usuario" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "empleo" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "finanzas_personales" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "pqr" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "tarjeta_credito" ALTER COLUMN "usuario_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "credito_prestamo" ADD CONSTRAINT "credito_prestamo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tarjeta_credito" ADD CONSTRAINT "tarjeta_credito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direccion_usuario" ADD CONSTRAINT "direccion_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleo" ADD CONSTRAINT "empleo_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finanzas_personales" ADD CONSTRAINT "finanzas_personales_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pqr" ADD CONSTRAINT "pqr_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "datacredito" ADD CONSTRAINT "datacredito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("IDENTIFICACION") ON DELETE RESTRICT ON UPDATE CASCADE;
