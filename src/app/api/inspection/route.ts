import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { inspectionRequests } from "@/db/schema";

export const dynamic = "force-dynamic";

type Payload = Record<string, unknown>;

function str(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = str(body.name);
  const phone = str(body.phone);
  const email = str(body.email);
  const service = str(body.service);
  const city = str(body.city);
  const message = str(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "Please enter a phone number we can reach you on.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please check the email address.";
  if (!service) errors.service = "Please choose what you need help with.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  try {
    await getDb().insert(inspectionRequests).values({
      name,
      phone,
      email: email || null,
      service,
      city: city || null,
      message: message || null,
    });
  } catch {
    return NextResponse.json(
      { error: "We could not save your request. Please call the office." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
