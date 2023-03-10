/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "preparationTime" VARCHAR(255) NOT NULL,
    "shelfLife" VARCHAR(255) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Production" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "dateOfCreation" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "count" DOUBLE PRECISION NOT NULL,
    "measurement" TEXT NOT NULL,

    CONSTRAINT "Production_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sells" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" TEXT NOT NULL,
    "measurement" VARCHAR(255) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "singlePrice" DECIMAL(65,30) NOT NULL,
    "finalPrice" DECIMAL(65,30) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Sells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Good" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "measurement" VARCHAR(255) NOT NULL,
    "partitionNumber" TEXT NOT NULL,

    CONSTRAINT "Good_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registeredOn" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "site" TEXT NOT NULL,
    "contactName" VARCHAR(255) NOT NULL,
    "vatRegistration" BOOLEAN NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplies" (
    "id" SERIAL NOT NULL,
    "good_id" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "measurement" VARCHAR(32) NOT NULL,
    "dateOfSupply" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipes" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "good_id" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "measurement" VARCHAR(160) NOT NULL,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyExpense" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "recurrence" VARCHAR(160) NOT NULL,
    "period" VARCHAR(160) NOT NULL,

    CONSTRAINT "MonthlyExpense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyCost" (
    "id" SERIAL NOT NULL,
    "costId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "MonthlyCost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_email_key" ON "Supplier"("email");
