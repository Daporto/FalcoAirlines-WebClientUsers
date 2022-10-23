import { UserRegistrationDto } from "../dtos/UserRegistrationDto"
import { UserResponseDto } from "../dtos/UserResponseDto"

export interface UserServicesInterface {
    registerNewUser(userData: UserRegistrationDto): UserResponseDto
}