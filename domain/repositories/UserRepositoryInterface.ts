import {User} from '../entities/User'

export interface UserRepositoryInterface {
    saveUser(user: User): User;
    getUserByUsername(username: string): User;
    deleteUser(user: User): boolean;
}