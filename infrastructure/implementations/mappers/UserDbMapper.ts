import { User } from "../../../domain/entities/User";
import UserDbShema from "../../driven-adapters/db/mongodb/models/IUserDbShema";
import IUserDbMapper from "./IUserDbMapper";
import {Types} from 'mongoose'

export default class UserRepositoryMapper implements IUserDbMapper{
    userDbSchemaToUser(userDbObject: UserDbShema): User {
        const user: User = {
            id: userDbObject._id.toString(),
            username: userDbObject.username,
            password: userDbObject.password,
            email: userDbObject.email
        }
        return user;
    }
    userToUserDbShema(user: User): UserDbShema {
        const userDbObject: UserDbShema = {
            _id: new Types.ObjectId(user.id),
            username: user.username,
            password: user.password,
            email: user.email
        }
        return userDbObject;
    }
}