-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "plu" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "action" VARCHAR(32) NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);
