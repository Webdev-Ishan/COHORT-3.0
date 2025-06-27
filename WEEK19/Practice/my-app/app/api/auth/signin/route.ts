import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;
  if (!email || !password) {
    return NextResponse.json(
      {
        success: false,
        message: "Please Send Credentials",
      },
      { status: 403 }
    );
  }

  try {
    const exist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!exist) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exists",
        },
        { status: 403 }
      );
    }

    const hashedPassword = await bcrypt.compare(password, exist.password);

    if (!hashedPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exists",
          exist,
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        success: true,

        message: "Account Created",
        exist,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong",
        },
        { status: 500 }
      );
    }
  }
  return NextResponse.json(
    {
      success: false,
      message: "Internal Server Error",
    },
    { status: 500 }
  );
}
