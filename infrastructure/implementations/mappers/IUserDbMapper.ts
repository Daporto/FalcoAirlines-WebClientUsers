import { User } from "../../../domain/entities/User";
import UserDbObject from "../../driven-adapters/db/mongodb/models/IUserDbShema";

export default interface IUserDbMapper{
    userToUserDbShema(user: User): UserDbObject,
    userDbSchemaToUser(userDbObject: UserDbObject): User
}