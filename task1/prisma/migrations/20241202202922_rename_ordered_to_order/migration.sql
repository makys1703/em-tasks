/*
  Warnings:

  - You are about to drop the column `orderedCount` on the `ProductBalance` table. All the data in the column will be lost.
  - Added the required column `orderCount` to the `ProductBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductBalance" DROP COLUMN "orderedCount",
ADD COLUMN     "orderCount" INTEGER NOT NULL;
