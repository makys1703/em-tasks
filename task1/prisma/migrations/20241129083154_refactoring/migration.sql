/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - The primary key for the `ProductBalance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `plu` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productPlu` on the `ProductBalance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ProductBalance" DROP CONSTRAINT "ProductBalance_productPlu_fkey";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "plu",
ADD COLUMN     "plu" INTEGER NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(32),
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("plu");

-- AlterTable
ALTER TABLE "ProductBalance" DROP CONSTRAINT "ProductBalance_pkey",
DROP COLUMN "productPlu",
ADD COLUMN     "productPlu" INTEGER NOT NULL,
ADD CONSTRAINT "ProductBalance_pkey" PRIMARY KEY ("productPlu", "shopId");

-- AddForeignKey
ALTER TABLE "ProductBalance" ADD CONSTRAINT "ProductBalance_productPlu_fkey" FOREIGN KEY ("productPlu") REFERENCES "Product"("plu") ON DELETE RESTRICT ON UPDATE CASCADE;
