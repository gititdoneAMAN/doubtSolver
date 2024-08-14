import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "../../../../lib/AuthConfig";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authConfig);
  console.log(session.user.name);
  const allDoubts = await prisma.doubts.findMany({
    where: {
      Status: "Pending",
      studentName: session.user.name,
    },
  });

  return NextResponse.json({ allDoubts });
}
