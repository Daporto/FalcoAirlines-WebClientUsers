import { User } from "../../../domain/entities/User";
import UserCreationDto from "../../../application/dtos/UserCreationDto";
import { UserResponseDto } from "../../../application/dtos/interfaces/UserResponseDto";
import UserMapperInterface from "../../../application/mappers/UserMapperInterface";

export default class UserMapper implements UserMapperInterface{
    userCreationDtoToUser(userData: UserCreationDto): User {
        throw new Error("Method not implemented.");
    }
    userToUserResponseDto(user: User): UserResponseDto {
        throw new Error("Method not implemented.");
    }
}