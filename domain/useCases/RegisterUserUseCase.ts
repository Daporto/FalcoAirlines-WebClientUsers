import { User } from "../entities/User";
import { RegisterUserInterface } from "./interfaces/RegisterUserInterface";
import {UserRepositoryInterface} from '../repositories/UserRepositoryInterface'

export class RegisterUserUseCase implements RegisterUserInterface{
    userRepository: UserRepositoryInterface;
    constructor(userRepository: UserRepositoryInterface){
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<User> {
        const savedUser = await this.userRepository.saveUser(user)
        return savedUser;
    }
}