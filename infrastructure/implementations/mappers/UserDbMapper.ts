import User from "../../../domain/entities/User";
import IUserDbMapper from "./interfaces/IUserDbMapper";
import {Types} from 'mongoose'
import UserDbModelDto from "../dtos/UserDbModelDto";

export default class UserRepositoryMapper implements IUserDbMapper{
    userDbObjectToUser(userDbObject: UserDbModelDto): User {
        const user: User = {
            id: userDbObject._id.toString(),
            username: userDbObject.username,
            password: userDbObject.password,
            email: userDbObject.email
        }
        return user;
    }
    userToUserDbObject(user: User): UserDbModelDto {
        const userDbObject: UserDbModelDto = {
            _id: user.id ? new Types.ObjectId(user.id) : new Types.ObjectId(""),
            username: user.username,
            password: user.password,
            email: user.email
        }
        return new UserDbModelDto(userDbObject._id, userDbObject.username, userDbObject.password, userDbObject.email);
    }
}