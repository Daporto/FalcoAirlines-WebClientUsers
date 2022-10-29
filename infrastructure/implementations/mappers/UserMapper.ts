import User from "../../../domain/entities/User";
import UserCreationDto from "../../../application/dtos/UserCreationDto";
import UserDto from "../../../application/dtos/UserDto";
import UserMapperInterface from "../../../application/mappers/IUserMapper";

export default class UserMapper implements UserMapperInterface{
    userCreationDtoToUser(userData: UserCreationDto): User {
        const user: User = {
            username: userData.username,
            password: userData.password,
            email: userData.email
        }
        return new User(user.username, user.password, user.email)
    }
    userToUserDto(user: User): UserDto {
        const userResponse: UserDto = {
            id: user.id ? user.id : "",
            username: user.username,
            email: user.email
        }
        return new UserDto(userResponse.id, userResponse.username, userResponse.email);
    }
}