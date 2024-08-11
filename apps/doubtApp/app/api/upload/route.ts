import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { promises as fsPromises } from "fs";
import path from "path";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { status: "fail", message: "No file uploaded" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");

    // Ensure the uploads directory exists
    await fsPromises.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);
    const writableStream = fs.createWriteStream(filePath);

    // Manually read the stream and write to the file
    const reader = file.stream().getReader();
    let done = false;

    while (!done) {
      const { done: streamDone, value } = await reader.read();
      if (streamDone) {
        done = true;
        continue;
      }
      writableStream.write(Buffer.from(value));
    }

    writableStream.end();

    // Construct the image URL
    const imageUrl = `/uploads/${file.name}`;
    console.log("Image url", imageUrl);
    return NextResponse.json({
      status: "success",
      fileName: file.name,
      imageUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { status: "fail", message: "File upload failed" },
      { status: 500 }
    );
  }
}
