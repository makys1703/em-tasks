/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderedCount` to the `ProductBalance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productPlu_shopId_fkey";

-- AlterTable
ALTER TABLE "ProductBalance" ADD COLUMN     "orderedCount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Order";
