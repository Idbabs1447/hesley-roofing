import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const inspectionRequests = pgTable("inspection_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  service: text("service").notNull(),
  city: text("city"),
  message: text("message"),
  source: text("source").default("website").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type InspectionRequest = typeof inspectionRequests.$inferSelect;
export type NewInspectionRequest = typeof inspectionRequests.$inferInsert;
