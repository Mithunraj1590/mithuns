import { NextRequest, NextResponse } from "next/server";
import { addMessage, getMessages } from "@/server/contactStore";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const saved = await addMessage({ name, email, message });
    return NextResponse.json({ success: true, message: saved }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  // Extra safety: only allow if admin cookie is present
  const adminCookie = req.cookies.get("admin_auth");
  if (!adminCookie || adminCookie.value !== "1") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await getMessages();
  return NextResponse.json({ messages });
}

