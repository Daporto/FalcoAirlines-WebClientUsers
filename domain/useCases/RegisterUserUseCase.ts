import { User } from "../entities/User";
import { RegisterUserInterface } from "./interfaces/RegisterUserInterface";
import {UserRepositoryInterface} from '../repositories/UserRepositoryInterface'

export class RegisterUserUseCase implements RegisterUserInterface{
    userRepository: UserRepositoryInterface;
    constructor(userRepository: UserRepositoryInterface){
        this.userRepository = userRepository;
    }

    execute(user: User): User {
        const savedUser = this.userRepository.saveUser(user)
        return savedUser;
    }
}