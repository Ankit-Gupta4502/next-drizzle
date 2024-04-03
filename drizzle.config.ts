import type { Config } from "drizzle-kit"

export default {
    schema: "./src/server/schema/schema.ts",
    out: "./src/server/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.db! || "postgres://default:Xvk6R7nqeGHV@ep-hidden-block-a1a4bfns.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
    },
    verbose:true
} satisfies Config