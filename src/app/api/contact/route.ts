import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { sanitizeContactInput, validateContactInput } from "@/lib/contact-validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Very small in-memory rate limiter (per server instance) to avoid abuse.
 * 5 submissions per 10 minutes per IP.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields, humans don't.
  const honeypot = (body as Record<string, unknown> | null)?.website;
  if (typeof honeypot === "string" && honeypot.length > 0) {
    // Pretend success so bots don't adapt.
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const input = sanitizeContactInput(body);
  const errors = validateContactInput(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  const rawLocale = (body as Record<string, unknown>).locale;
  const locale = rawLocale === "en" ? "en" : "fr";

  try {
    const [saved] = await db
      .insert(contactMessages)
      .values({ ...input, locale })
      .returning({ id: contactMessages.id, createdAt: contactMessages.createdAt });

    return NextResponse.json({ ok: true, id: saved.id, createdAt: saved.createdAt }, { status: 201 });
  } catch (error) {
    console.error("[contact] failed to store message", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
