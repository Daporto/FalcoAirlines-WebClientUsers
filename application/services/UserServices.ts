import { RegisterUserUseCase } from "../../domain/useCases/RegisterUserUseCase";
import UserCreationDto from "../dtos/UserCreationDto";
import { UserResponseDto } from "../dtos/interfaces/UserResponseDto";
import UserMapperInterface from "../mappers/UserMapperInterface";
import { UserServicesInterface } from "./UserServicesInterface";

export default class UserServices implements UserServicesInterface{
    userMapper: UserMapperInterface;

    constructor(userMapper: UserMapperInterface){
        this.userMapper = userMapper;
    }

    registerNewUser(userData: UserCreationDto): UserResponseDto {
        const newUser = this.userMapper.userCreationDtoToUser(userData);
        return this.userMapper.userToUserResponseDto(newUser);
    }
}