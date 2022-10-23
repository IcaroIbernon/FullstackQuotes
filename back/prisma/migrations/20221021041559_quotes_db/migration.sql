-- CreateTable
CREATE TABLE "Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "localFrom" TEXT NOT NULL,
    "localDest" TEXT NOT NULL,
    "depDate" DATETIME NOT NULL,
    "retDate" DATETIME NOT NULL,
    "transport" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "qtPeople" INTEGER NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Quote_email_key" ON "Quote"("email");
