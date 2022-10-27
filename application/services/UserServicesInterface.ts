import UserCreationDto from "../dtos/UserCreationDto"
import { UserResponseDto } from "../dtos/interfaces/UserResponseDto"

export interface UserServicesInterface {
    registerNewUser(userData: UserCreationDto): Promise<UserResponseDto>
}