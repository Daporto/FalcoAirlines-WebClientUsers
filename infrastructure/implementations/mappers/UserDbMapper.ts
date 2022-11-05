import User from "../../../domain/entities/User";
import IUserDbMapper from "./interfaces/IUserDbMapper";
import {Types} from 'mongoose'
import UserDbModelDto from "../dtos/UserDbModelDto";

export default class UserRepositoryMapper implements IUserDbMapper{
    userDbObjectToUser(userDbObject: UserDbModelDto): User {
        const user: User = {
            id: userDbObject._id ? userDbObject._id.toString() : undefined,
            email: userDbObject.email,
            password: userDbObject.password,
        }
        return user;
    }
    userToUserDbObject(user: User): UserDbModelDto {
        console.log(user);
        const userDbObject: UserDbModelDto = {
            _id: user.id ? new Types.ObjectId(user.id) : undefined,
            email: user.email,
            password: user.password
        }
        return new UserDbModelDto(userDbObject.email, userDbObject.password, userDbObject._id);
    }
}