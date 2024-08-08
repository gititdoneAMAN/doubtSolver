import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const {
    email,
    password,
    name,
    usn,
    semester,
    section,
    department,
    subjects,
  } = body;

  try {
    const existingUser = await prisma.student.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({
        msg: "User already exists",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.student.create({
        data: {
          email,
          password: hashedPassword,
          name,
          usn,
          semester,
          section,
          depatment: department,
          subjects,
        },
      });
      return NextResponse.json({
        mag: "success",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
