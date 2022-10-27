import { User } from "../../../domain/entities/User";
import UserDbObject from "../../driven-adapters/db/mongodb/models/IUserDbShema";

export default interface IUserDbMapper{
    userToUserDbObject(user: User): UserDbObject,
    userDbObjectToUser(userDbObject: UserDbObject): User
}