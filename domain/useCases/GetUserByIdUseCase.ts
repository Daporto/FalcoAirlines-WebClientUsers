import User from "../entities/User";
import UserNotFoundError from "../exceptions/UserNotFoundError";
import IUserRepository from "../repositories/IUserRepository";
import IGetUserByIdUseCase from "./interfaces/IGetUserByIdUseCase";

export class GetUserByIdUseCase implements IGetUserByIdUseCase {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }
    async execute(id: string): Promise<User> {
        const user = await this.userRepository.getUserById(id);
        console.log(user);
        if(user){
            return user
        }else{
            throw new UserNotFoundError(`User with id ${id} could not be found`)
        }
    }
}