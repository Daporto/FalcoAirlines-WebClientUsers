import UserCreationDto from "../dtos/IUserCreationDto"
import UserDto from "../dtos/UserDto"

export default interface IUserServices {
    registerNewUser(userData: UserCreationDto): Promise<UserDto>;
    getUserById(id: string): Promise<UserDto>;
}