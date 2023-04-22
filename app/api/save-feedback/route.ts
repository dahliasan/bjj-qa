import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  const savedFeedback = await prisma.userQuery.update({
    where: {
      id: data.id,
    },
    data: {
      helpful: data.helpful,
    },
  });

  return NextResponse.json({ message: savedFeedback }, { status: 200 });
}

export async function GET(request: Request) {
  // Your code here
  return NextResponse.json({ message: "Hello, world!" }, { status: 200 });
}
