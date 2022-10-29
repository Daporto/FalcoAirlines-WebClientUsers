import User from "../../../domain/entities/User";
import IUserDbMapper from "./interfaces/IUserDbMapper";
import {Types} from 'mongoose'
import UserDbModelDto from "../dtos/UserDbModelDto";

export default class UserRepositoryMapper implements IUserDbMapper{
    userDbObjectToUser(userDbObject: UserDbModelDto): User {
        const user: User = {
            id: userDbObject._id ? userDbObject._id.toString() : undefined,
            username: userDbObject.username,
            password: userDbObject.password,
            email: userDbObject.email
        }
        return user;
    }
    userToUserDbObject(user: User): UserDbModelDto {
        console.log(user);
        const userDbObject: UserDbModelDto = {
            _id: user.id ? new Types.ObjectId(user.id) : undefined,
            username: user.username,
            password: user.password,
            email: user.email
        }
        return new UserDbModelDto(userDbObject.username, userDbObject.password, userDbObject.email, userDbObject._id);
    }
}