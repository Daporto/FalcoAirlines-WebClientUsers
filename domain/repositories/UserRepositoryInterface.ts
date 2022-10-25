import {User} from '../entities/User'

export interface UserRepositoryInterface {
    saveUser(user: User): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    deleteUser(user: User): boolean;
}