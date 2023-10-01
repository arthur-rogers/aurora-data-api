import { eq } from 'drizzle-orm';
import { User, NewUser, users } from '../models/users.model';
import { db } from './aurora.service';
import { ExecuteStatementCommandOutput } from '@aws-sdk/client-rds-data/dist-types/commands/ExecuteStatementCommand';

export class UsersService {
    public async getAllUsers(): Promise<Array<User>> {
        return db.select().from(users);
    }

    public async getUserById(_id: string): Promise<Array<User> | User> {
        return db.select().from(users).where(eq(users.id, _id));
    }

    public async getUserByEmail(_email: string): Promise<Array<User> | User> {
        return db.select().from(users).where(eq(users.email, _email));
    }

    public async createUser(user: NewUser): Promise<ExecuteStatementCommandOutput> {
        return db.insert(users).values(user);
    }

    public async deleteUser(userId: string): Promise<ExecuteStatementCommandOutput> {
        return db.delete(users).where(eq(users.id, userId));
    }
}
