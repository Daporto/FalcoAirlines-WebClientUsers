import User from '../entities/User'

export default interface IUserRepository {
    saveUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User>;
    deleteUser(user: User): boolean;
    checkIfEmailExists(email: string);
}