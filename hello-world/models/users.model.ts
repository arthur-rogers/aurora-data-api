import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: varchar('user_id', { length: 50 }).primaryKey(),
    name: varchar('full_name', { length: 50 }).notNull(),
    phoneNumber: varchar('phone_number', { length: 15 }),
    email: varchar('user_email'),
    address: text('address'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferSelect;
