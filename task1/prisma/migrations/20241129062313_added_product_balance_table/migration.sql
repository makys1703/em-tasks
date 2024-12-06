/*
  Warnings:

  - A unique constraint covering the columns `[plu]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ProductBalance" (
    "shopId" INTEGER NOT NULL,
    "productPlu" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductBalance_productPlu_key" ON "ProductBalance"("productPlu");

-- CreateIndex
CREATE UNIQUE INDEX "Product_plu_key" ON "Product"("plu");

-- AddForeignKey
ALTER TABLE "ProductBalance" ADD CONSTRAINT "ProductBalance_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBalance" ADD CONSTRAINT "ProductBalance_productPlu_fkey" FOREIGN KEY ("productPlu") REFERENCES "Product"("plu") ON DELETE RESTRICT ON UPDATE CASCADE;
