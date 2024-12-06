/*
  Warnings:

  - Added the required column `count` to the `ProductBalance` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_plu_key";

-- DropIndex
DROP INDEX "ProductBalance_productPlu_key";

-- AlterTable
ALTER TABLE "ProductBalance" ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProductBalance_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "productBalanceId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productBalanceId_fkey" FOREIGN KEY ("productBalanceId") REFERENCES "ProductBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
