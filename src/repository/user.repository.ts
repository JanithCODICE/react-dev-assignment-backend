import { User } from "../types/Entities/user.entity";

class UserRepository {
    private readonly users: User[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 1, password: 'password123' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 0, password: 'password456' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 1, password: 'password789' },
    ];

    findUserByEmailAndStatus(email: string, status: number): User | undefined {
        return this.users.find(user => user.email === email && user.status === status);
    }
}

export const userRepository = new UserRepository();