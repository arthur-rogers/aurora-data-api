import { doublePrecision, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const orders = pgTable('orders', {
    id: varchar('order_id').primaryKey(),
    price: doublePrecision('order_price').notNull(),
    description: text('address'),
    customerId: varchar('customer_id').notNull(),
    orderDate: timestamp('order_date', { precision: 6, withTimezone: true }).notNull(),
});

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
