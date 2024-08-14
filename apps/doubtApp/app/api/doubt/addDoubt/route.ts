import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const doubtData = await prisma.doubts.create({
    data: {
      ...body,
    },
  });
  await prisma.student.update({
    where: {
      usn: body?.usn,
    },
    data: {
      doubtAsked: {
        connect: {
          id: doubtData?.id,
        },
      },
    },
  });

  return NextResponse.json({ msg: "success" });
}
