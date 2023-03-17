/*
  Warnings:

  - Added the required column `finalPrice` to the `Supplies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Supplies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Supplies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supplies" ADD COLUMN     "finalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "tax" DECIMAL(65,30) NOT NULL;
