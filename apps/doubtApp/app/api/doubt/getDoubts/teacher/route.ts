import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "../../../../../lib/AuthConfig";
import prisma from "@repo/db/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authConfig);

  if (session?.user) {
    const doubts = await prisma.doubts.findMany({
      where: {
        empId: session?.user?.identity,
        Status: "Pending",
      },
    });

    return NextResponse.json({ doubts });
  }
}
