import User from "../../../domain/entities/User";
import UserCreationDto from "../../../application/dtos/UserCreationDto";
import UserDto from "../../../application/dtos/UserDto";
import UserMapperInterface from "../../../application/mappers/IUserMapper";

export default class UserMapper implements UserMapperInterface{
    userCreationDtoToUser(userData: UserCreationDto): User {
        const user: User = {
            email: userData.email,
            password: userData.password,
        }
        return new User(user.email, user.password)
    }
    userToUserDto(user: User): UserDto {
        const userResponse: UserDto = {
            id: user.id ? user.id : "",
            email: user.email
        }
        return new UserDto(userResponse.id, userResponse.email);
    }
}