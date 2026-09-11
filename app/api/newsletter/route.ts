import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  console.log("[newsletter] signup:", {
    email: body.email,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
