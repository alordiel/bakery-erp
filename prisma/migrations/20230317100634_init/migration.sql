/*
  Warnings:

  - Added the required column `finalPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isResell` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "finalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "isResell" BOOLEAN NOT NULL,
ADD COLUMN     "tax" DECIMAL(65,30) NOT NULL;
