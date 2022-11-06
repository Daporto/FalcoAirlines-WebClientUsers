import User from "../../domain/entities/User"
import UserCreationDto from "../dtos/IUserCreationDto"
import UserDto from "../dtos/UserDto"
export default interface IUserMapper {
    userCreationDtoToUser(userData: UserCreationDto): User;
    userToUserDto(user: User): UserDto
}