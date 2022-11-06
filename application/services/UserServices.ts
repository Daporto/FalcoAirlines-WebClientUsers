import { RegisterUserUseCase } from "../../domain/useCases/RegisterUserUseCase";
import UserCreationDto from "../dtos/IUserCreationDto";
import UserDto from "../dtos/UserDto";
import UserMapperInterface from "../mappers/IUserMapper";
import IUserServices from "./IUserServices";
import User from "../../domain/entities/User";
import IUserRepository from "../../domain/repositories/IUserRepository";
import { GetUserByIdUseCase } from "../../domain/useCases/GetUserByIdUseCase";

export default class UserServices implements IUserServices{
    userMapper: UserMapperInterface;
    registerUserUseCase: RegisterUserUseCase;
    getUserByIdUseCase: GetUserByIdUseCase;

    constructor(userRepository: IUserRepository, userMapper: UserMapperInterface){
        this.registerUserUseCase = new RegisterUserUseCase(userRepository);
        this.getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
        this.userMapper = userMapper;
    }

    async getUserById(id: string): Promise<UserDto> {
        const user = await this.getUserByIdUseCase.execute(id);
        return this.userMapper.userToUserDto(user);
    }

    async registerNewUser(userData: UserCreationDto): Promise<UserDto> {
        const newUser: User = this.userMapper.userCreationDtoToUser(userData);
        const savedUser: User = await this.registerUserUseCase.execute(newUser);
        return this.userMapper.userToUserDto(savedUser);
    }
}