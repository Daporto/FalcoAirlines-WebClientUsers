import User from '../entities/User'

export default interface IUserRepository {
    saveUser(user: User): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    deleteUser(user: User): boolean;
}