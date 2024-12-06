/*
  Warnings:

  - You are about to drop the column `orderedCount` on the `ProductBalance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductBalance" DROP COLUMN "orderedCount";

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "productPlu" INTEGER NOT NULL,
    "shopId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productPlu_shopId_fkey" FOREIGN KEY ("productPlu", "shopId") REFERENCES "ProductBalance"("productPlu", "shopId") ON DELETE RESTRICT ON UPDATE CASCADE;
