import User from '../../entities/User'

export default interface IRegisterUserUseCase {
    execute(user: User): Promise<User>;
}