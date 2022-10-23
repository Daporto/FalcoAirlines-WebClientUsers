import { User } from "../../domain/entities/User";
import { UserRegistrationDto } from "../dtos/UserRegistrationDto";
import { UserResponseDto } from "../dtos/UserResponseDto";
import { UserMapperInterface } from "./UserMapperInterface";

export class UserMapper implements UserMapperInterface{
    userRegistrationDtoToUser(userData: UserRegistrationDto): User {
        throw new Error("Method not implemented.");
    }
    userToUserResponseDto(user: User): UserResponseDto {
        throw new Error("Method not implemented.");
    }
}