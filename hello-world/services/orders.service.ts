import { eq } from 'drizzle-orm';
import { db } from './aurora.service';
import { ExecuteStatementCommandOutput } from '@aws-sdk/client-rds-data/dist-types/commands/ExecuteStatementCommand';
import { orders, Order, NewOrder } from '../models/orders.model';

export class OrderService {
    public async getOrderById(orderId: string): Promise<Order[]> {
        return db.select().from(orders).where(eq(orders.id, orderId));
    }

    public async getOrdersByDate(date: Date): Promise<Order[]> {
        return db.select().from(orders).where(eq(orders.orderDate, date));
    }

    public async getOrdersByCustomerId(customerId: string): Promise<Order[]> {
        return db.select().from(orders).where(eq(orders.customerId, customerId));
    }
}
