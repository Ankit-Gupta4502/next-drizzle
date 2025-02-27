
import { pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core"
const users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 256 }),
	email: varchar("email", { length: 256 }).notNull().unique(),
	password: varchar("password", { length: 256 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});


export default users