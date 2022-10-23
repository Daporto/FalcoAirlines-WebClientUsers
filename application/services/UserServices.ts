import { RegisterUserUseCase } from "../../domain/useCases/RegisterUserUseCase";
import { UserRegistrationDto } from "../dtos/UserRegistrationDto";
import { UserResponseDto } from "../dtos/UserResponseDto";
import { UserMapper } from "../mappers/UserMapper";
import { UserServicesInterface } from "./UserServicesInterface";

export class UserServices implements UserServicesInterface{
    userMapper = new UserMapper();

    registerNewUser(userData: UserRegistrationDto): UserResponseDto {
        const newUser = this.userMapper.userRegistrationDtoToUser(userData);
        return this.userMapper.userToUserResponseDto(newUser);
    }
}