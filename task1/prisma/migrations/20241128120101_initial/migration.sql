-- CreateTable
CREATE TABLE "Product" (
    "plu" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("plu")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);
