import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const allDoubts = await prisma.doubts.findMany({
    where: {
      Status: "Complete",
    },
  });

  return NextResponse.json({ allDoubts });
}
