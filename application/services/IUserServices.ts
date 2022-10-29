import UserCreationDto from "../dtos/UserCreationDto"
import UserDto from "../dtos/UserDto"

export default interface IUserServices {
    registerNewUser(userData: UserCreationDto): Promise<UserDto>
}