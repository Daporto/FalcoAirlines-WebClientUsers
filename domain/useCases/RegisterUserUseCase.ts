import User from "../entities/User";
import IRegisterUserUseCase from "./interfaces/IRegisterUserUseCase";
import IUserRepository from '../repositories/IUserRepository'
import EmptyFieldError from '../exceptions/EmptyFieldError'
import EmailAlreadyExists from "../exceptions/EmailAlreadyExistsError";

export class RegisterUserUseCase implements IRegisterUserUseCase {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<User> {
        this.validateEmptyFields(user);
        let emailExists = await this.userRepository.checkIfEmailExists(user.email);
        if(emailExists){
            throw new EmailAlreadyExists(`email ${user.email} already is in use`)
        }
        const savedUser = await this.userRepository.saveUser(user);
        return savedUser;
    }

    validateEmptyFields(user: User){
        const requiredFields = ["email","password"];
        for (const requiredField of requiredFields) {
            let propertyValue = user[requiredField as keyof User];
            if(!propertyValue || propertyValue===""){
                throw new EmptyFieldError(`The field ${requiredField} is missing`)
            }
        }
    }
}