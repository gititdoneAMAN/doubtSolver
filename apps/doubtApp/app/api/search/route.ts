import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  console.log(body.query);

  let i = 0;
  let searchParameter: any = [];

  console.log(body.query.length);

  for (i = 0; i < body.query.length; i++) {
    searchParameter.push({ question: { contains: body.query[i] } });
  }
  console.log(searchParameter);

  const searchedData = await prisma.doubts.findMany({
    where: {
      OR: searchParameter,
    },
  });

  console.log(searchedData);

  return NextResponse.json({ body: searchedData });
}
