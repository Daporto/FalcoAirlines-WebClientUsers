import { User } from "../../domain/entities/User"
import UserCreationDto from "../dtos/UserCreationDto"
import { UserResponseDto } from "../dtos/interfaces/UserResponseDto"
export default interface UserMapperInterface {
    userCreationDtoToUser(userData: UserCreationDto): User;
    userToUserResponseDto(user: User): UserResponseDto
}