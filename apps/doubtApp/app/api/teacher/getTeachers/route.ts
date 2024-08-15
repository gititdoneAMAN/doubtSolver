import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const teachers = await prisma.teachers.findMany({});

  const returnObject = teachers.map((teacher) => {
    return {
      id: teacher.id,
      email: teacher.email,
      name: teacher.name,
      employeeId: teacher.employeeId,
      department: teacher.depatment,
    };
  });

  return NextResponse.json({ returnObject });
}
