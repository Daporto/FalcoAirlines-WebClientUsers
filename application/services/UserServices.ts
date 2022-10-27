import { RegisterUserUseCase } from "../../domain/useCases/RegisterUserUseCase";
import UserCreationDto from "../dtos/UserCreationDto";
import { UserResponseDto } from "../dtos/interfaces/UserResponseDto";
import UserMapperInterface from "../mappers/UserMapperInterface";
import { UserServicesInterface } from "./UserServicesInterface";
import { User } from "../../domain/entities/User";
import { UserRepositoryInterface } from "../../domain/repositories/UserRepositoryInterface";

export default class UserServices implements UserServicesInterface{
    userMapper: UserMapperInterface;
    registerUserUseCase: RegisterUserUseCase;

    constructor(userRepository: UserRepositoryInterface, userMapper: UserMapperInterface){
        this.registerUserUseCase = new RegisterUserUseCase(userRepository);
        this.userMapper = userMapper;
    }

    async registerNewUser(userData: UserCreationDto): Promise<UserResponseDto> {
        const newUser: User = this.userMapper.userCreationDtoToUser(userData);
        const savedUser = await this.registerUserUseCase.execute(newUser);
        return this.userMapper.userToUserResponseDto(savedUser);
    }
}