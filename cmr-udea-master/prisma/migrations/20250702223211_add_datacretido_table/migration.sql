-- CreateTable
CREATE TABLE "datacredito" (
    "ID" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "xml_data" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "datacredito_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "datacredito" ADD CONSTRAINT "datacredito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
