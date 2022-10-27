import { User } from "../../../domain/entities/User";
import UserCreationDto from "../../../application/dtos/UserCreationDto";
import { UserResponseDto } from "../../../application/dtos/interfaces/UserResponseDto";
import UserMapperInterface from "../../../application/mappers/UserMapperInterface";

export default class UserMapper implements UserMapperInterface{
    userCreationDtoToUser(userData: UserCreationDto): User {
        const user: User = {
            username: userData.username,
            password: userData.password,
            email: userData.email
        }
        return user
    }
    userToUserResponseDto(user: User): UserResponseDto {
        const userResponse: UserResponseDto = {
            __typename:"User",
            id: user.id,
            username: user.username,
            email: user.email
        }
        return userResponse
    }
}