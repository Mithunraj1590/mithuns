import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme-admin";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return res;
}

