import { pgTable, text, timestamp, uuid, integer, boolean, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const initialDev = pgTable("initial_dev", {
  id: uuid("id").defaultRandom().primaryKey(),
  phaseNumber: integer("phase_number").notNull(),
  phaseName: text("phase_name").notNull(),
  phaseDescription: text("phase_description"),
  taskNumber: integer("task_number").notNull(),
  taskName: text("task_name").notNull(),
  taskDescription: text("task_description"),
  taskType: text("task_type").notNull(),
  subtasks: jsonb("subtasks"),
  tests: jsonb("tests"),
  status: text("status").notNull().default("pending"),
  priority: text("priority").default("medium"),
  estimatedHours: integer("estimated_hours"),
  actualHours: integer("actual_hours"),
  assignedTo: text("assigned_to"),
  dependencies: jsonb("dependencies"),
  notes: text("notes"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
