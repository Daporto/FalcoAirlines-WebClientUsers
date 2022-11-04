import User from '../../entities/User'

export default interface IGetUserByIdUseCase {
    execute(id: string): Promise<User>;
}