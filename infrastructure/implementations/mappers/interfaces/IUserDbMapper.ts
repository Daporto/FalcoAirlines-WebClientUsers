import User from "../../../../domain/entities/User";
import UserDbModelDto from "../../dtos/IUserDbModelDto";

export default interface IUserDbMapper{
    userToUserDbObject(user: User): UserDbModelDto,
    userDbObjectToUser(userDbObject: UserDbModelDto): User
}