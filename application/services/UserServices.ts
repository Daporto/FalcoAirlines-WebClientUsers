import { RegisterUserUseCase } from "../../domain/useCases/RegisterUserUseCase";
import UserCreationDto from "../dtos/UserCreationDto";
import UserDto from "../dtos/UserDto";
import UserMapperInterface from "../mappers/IUserMapper";
import IUserServices from "./IUserServices";
import User from "../../domain/entities/User";
import IUserRepository from "../../domain/repositories/IUserRepository";

export default class UserServices implements IUserServices{
    userMapper: UserMapperInterface;
    registerUserUseCase: RegisterUserUseCase;

    constructor(userRepository: IUserRepository, userMapper: UserMapperInterface){
        this.registerUserUseCase = new RegisterUserUseCase(userRepository);
        this.userMapper = userMapper;
    }

    async registerNewUser(userData: UserCreationDto): Promise<UserDto> {
        const newUser: User = this.userMapper.userCreationDtoToUser(userData);
        const savedUser: User = await this.registerUserUseCase.execute(newUser);
        return this.userMapper.userToUserDto(savedUser);
    }
}