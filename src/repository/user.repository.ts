import { PaginatedResult } from "../helpers/response.helper";
import { User } from "../types/Entities/user.entity";

class UserRepository {
    private readonly users: User[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 1, password: 'password123' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 0, password: 'password456' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 1, password: 'password789' },
        { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', status: 1, password: 'password101' },
        { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', status: 0, password: 'password102' },
        { id: 6, name: 'Diana Evans', email: 'diana.evans@example.com', status: 1, password: 'password103' },
        { id: 7, name: 'Eve Foster', email: 'eve.foster@example.com', status: 0, password: 'password104' },
        { id: 8, name: 'Frank Green', email: 'frank.green@example.com', status: 1, password: 'password105' },
        { id: 9, name: 'Grace Harris', email: 'grace.harris@example.com', status: 0, password: 'password106' },
        { id: 10, name: 'Henry Irving', email: 'henry.irving@example.com', status: 1, password: 'password107' },
        { id: 11, name: 'Ivy Johnson', email: 'ivy.johnson@example.com', status: 0, password: 'password108' },
        { id: 12, name: 'Jack King', email: 'jack.king@example.com', status: 1, password: 'password109' },
        { id: 13, name: 'Karen Lee', email: 'karen.lee@example.com', status: 0, password: 'password110' },
        { id: 14, name: 'Leo Martin', email: 'leo.martin@example.com', status: 1, password: 'password111' },
        { id: 15, name: 'Mia Nelson', email: 'mia.nelson@example.com', status: 0, password: 'password112' },
        { id: 16, name: 'Nina Olson', email: 'nina.olson@example.com', status: 1, password: 'password113' },
    ];

    findUserByEmailAndStatus(email: string, status: number): User | undefined {
        return this.users.find(user => user.email === email && user.status === status);
    }

    getPaginatedUsers(page: number): PaginatedResult<User> {
        const pageSize = 5;
        const start = page * pageSize;
        const end = start + pageSize;

        const users: User[] = this.users.slice(start, end);

        const result = {
            entities: users,
            pagination: {
                totalRowCount: this.users.length,
                pageSize: users.length
            }
        }
        return result;
    }

}

export const userRepository = new UserRepository();