import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "../../../../lib/AuthConfig";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authConfig);

  return new Response(JSON.stringify({ session }));
}
