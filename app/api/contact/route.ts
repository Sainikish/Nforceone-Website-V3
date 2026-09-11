import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.firstName !== "string" ||
    !body.firstName.trim() ||
    typeof body.lastName !== "string" ||
    !body.lastName.trim() ||
    typeof body.company !== "string" ||
    !body.company.trim() ||
    typeof body.companyEmail !== "string" ||
    !body.companyEmail.includes("@")
  ) {
    return NextResponse.json({ ok: false, error: "Missing or invalid required fields." }, { status: 400 });
  }

  console.log("[contact] consultation request:", {
    firstName: body.firstName,
    lastName: body.lastName,
    company: body.company,
    companyEmail: body.companyEmail,
    phone: body.phone ?? "",
    message: body.message ?? "",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
