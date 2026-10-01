import { getDb } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await getDb().execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch (error) {
    // Return details in dev so misconfiguration (e.g. missing DATABASE_URL)
    // is visible; stay vague in production.
    const message =
      process.env.NODE_ENV === "production"
        ? "database unavailable"
        : error instanceof Error
          ? error.message
          : "unknown error";

    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
