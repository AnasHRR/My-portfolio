import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * Lazily-initialized Postgres pool + Drizzle client.
 *
 * The pool is created on first use instead of at import time so that
 * `next build` never fails when DATABASE_URL isn't set in the build
 * environment (e.g. CI). A missing DATABASE_URL surfaces at request
 * time instead, where callers can handle it.
 */

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

function getPool(): Pool {
  if (!globalForDb.__arenaNextJsPostgresqlPool) {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error(
        "DATABASE_URL is required to use the database. Add it to your .env file or environment."
      );
    }

    const pool = new Pool({ connectionString: databaseUrl });

    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsPostgresqlPool = pool;
    }

    return pool;
  }

  return globalForDb.__arenaNextJsPostgresqlPool;
}

export function getDb() {
  return drizzle(getPool());
}
