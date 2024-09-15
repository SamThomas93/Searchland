import Database from "better-sqlite3";
import { publicProcedure, router } from "./trpc";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users } from "@/server/db/schema";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { z } from "zod";
import * as schema from "@/server/db/schema";
import { count, eq } from "drizzle-orm";
import { UserSchema } from "./types";
import { PAGE_LIMIT } from "@/assets/data/constants";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite, { schema });

migrate(db, { migrationsFolder: "src/server/db/migrations" });

export const appRouter = router({
  getUsers: publicProcedure
    .input(
      z.object({
        skip: z.number(),
      }),
    )
    .query(async (opts) => {
      return {
        users: await db.query.users.findMany({
          limit: PAGE_LIMIT,
          offset: opts.input.skip,
        }),
        count: (await db.select({ count: count() }).from(users))[0].count,
      };
    }),
  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      return db.select().from(users).where(eq(users.id, opts.input.id));
    }),
  addUser: publicProcedure.input(UserSchema).mutation(async (opts) => {
    const { input } = opts;
    return db
      .insert(users)
      .values({ id: crypto.randomUUID(), ...input })
      .returning();
  }),
  deleteUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      return db.delete(users).where(eq(users.id, opts.input.id));
    }),
});

export type AppRouter = typeof appRouter;
