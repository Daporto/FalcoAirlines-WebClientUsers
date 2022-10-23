import { User } from "../../domain/entities/User"
import { UserRegistrationDto } from "../dtos/UserRegistrationDto"
import { UserResponseDto } from "../dtos/UserResponseDto"
export interface UserMapperInterface {
    userRegistrationDtoToUser(userData: UserRegistrationDto): User;
    userToUserResponseDto(user: User): UserResponseDto
}