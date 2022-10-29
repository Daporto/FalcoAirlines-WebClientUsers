import User from "../entities/User";
import IRegisterUserUseCase from "./interfaces/IRegisterUserUseCase";
import IUserRepository from '../repositories/IUserRepository'

export class RegisterUserUseCase implements IRegisterUserUseCase {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<User> {
        const savedUser = await this.userRepository.saveUser(user)
        return savedUser;
    }
}