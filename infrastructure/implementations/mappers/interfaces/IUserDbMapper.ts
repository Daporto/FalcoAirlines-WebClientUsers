import User from "../../../../domain/entities/User";
import UserDbModelDto from "../../dtos/UserDbModelDto";

export default interface IUserDbMapper{
    userToUserDbObject(user: User): UserDbModelDto,
    userDbObjectToUser(userDbObject: UserDbModelDto): User
}