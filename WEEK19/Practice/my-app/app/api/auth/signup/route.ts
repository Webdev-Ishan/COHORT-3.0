import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, email, password } = data;
  if (!username || !email || !password) {
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

    if (exist) {
      return NextResponse.json(
        {
          success: true,
          message: "User Alreadye exists",
          exist,
        },
        { status: 403 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,

        message: "Account Created",
        newUser,
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
