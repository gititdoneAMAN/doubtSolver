-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Complete');

-- CreateTable
CREATE TABLE "Doubts" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "teacherConcernedName" TEXT NOT NULL,
    "Subject" "SubjectType" NOT NULL,
    "Department" "DeptType" NOT NULL,
    "Status" "Status" NOT NULL DEFAULT 'Pending',
    "studentId" TEXT NOT NULL,
    "empId" TEXT NOT NULL,

    CONSTRAINT "Doubts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Doubts" ADD CONSTRAINT "Doubts_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doubts" ADD CONSTRAINT "Doubts_empId_fkey" FOREIGN KEY ("empId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
