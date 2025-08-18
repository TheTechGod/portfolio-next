import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    if (String(message).trim().length < 20) {
      return NextResponse.json({ ok: false, error: "Message too short" }, { status: 400 });
    }

    // Placeholder store/log (replace with email or DB later)
    console.log("Contact form:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 });
  }
}
