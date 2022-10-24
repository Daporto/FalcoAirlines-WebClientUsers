import { UserRegistrationDto } from "../dtos/UserRegistrationDto"
import { UserResponseDto } from "../dtos/interfaces/UserResponseDto"

export interface UserServicesInterface {
    registerNewUser(userData: UserRegistrationDto): UserResponseDto
}