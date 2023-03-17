/*
  Warnings:

  - Added the required column `notes` to the `Good` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `MonthlyCost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `MonthlyExpense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Supplies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Good" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MonthlyCost" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MonthlyExpense" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "notes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Supplies" ADD COLUMN     "notes" TEXT NOT NULL;
