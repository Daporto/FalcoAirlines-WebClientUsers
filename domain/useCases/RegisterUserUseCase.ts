import User from "../entities/User";
import IRegisterUserUseCase from "./interfaces/IRegisterUserUseCase";
import IUserRepository from '../repositories/IUserRepository'
import EmptyFieldError from '../business-errors/EmptyFieldError'

export class RegisterUserUseCase implements IRegisterUserUseCase {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<User> {
        this.validateEmptyFields(user);
        const savedUser = await this.userRepository.saveUser(user);
        return savedUser;
    }

    validateEmptyFields(user: User){
        const requiredFields = ["username", "password", "email"];
        for (const requiredField of requiredFields) {
            let propertyValue = user[requiredField as keyof User];
            if(!propertyValue || propertyValue===""){
                throw new EmptyFieldError(`The field ${requiredField} is missing`)
            }
        }
    }
}