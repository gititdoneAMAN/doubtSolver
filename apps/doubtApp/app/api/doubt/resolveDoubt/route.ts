import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const doubtID = await prisma.doubts.update({
    where: {
      id: body?.id,
    },
    data: {
      Status: "Complete",
      teacherResponse: body?.teacherResponse,
      teacherImgUrl: body?.teacherImgUrl,
    },
  });
  await prisma.teachers.update({
    where: {
      employeeId: body?.empId,
    },
    data: {
      doubtSolved: {
        connect: {
          id: doubtID?.id,
        },
      },
    },
  });
  return NextResponse.json({ msg: "success" });
}
