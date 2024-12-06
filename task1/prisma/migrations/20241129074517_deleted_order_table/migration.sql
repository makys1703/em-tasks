/*
  Warnings:

  - The primary key for the `ProductBalance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProductBalance` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderedCount` to the `ProductBalance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productBalanceId_fkey";

-- AlterTable
ALTER TABLE "ProductBalance" DROP CONSTRAINT "ProductBalance_pkey",
DROP COLUMN "id",
ADD COLUMN     "orderedCount" INTEGER NOT NULL,
ADD CONSTRAINT "ProductBalance_pkey" PRIMARY KEY ("productPlu", "shopId");

-- DropTable
DROP TABLE "Order";
