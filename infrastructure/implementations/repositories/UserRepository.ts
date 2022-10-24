import { User } from "../../../domain/entities/User";
import { UserRepositoryInterface } from "../../../domain/repositories/UserRepositoryInterface";


export class UserRepository implements UserRepositoryInterface {
    saveUser(user: User): User {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username: string): User {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User): boolean {
        throw new Error("Method not implemented.");
    }
    
}