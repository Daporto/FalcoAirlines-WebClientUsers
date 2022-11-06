import User from "../../../domain/entities/User";
import IUserDbMapper from "./interfaces/IUserDbMapper";
import { Types } from 'mongoose'
import IUserDbModelDto from "../dtos/IUserDbModelDto";

export default class UserRepositoryMapper implements IUserDbMapper {
    userDbObjectToUser(userDbObject: IUserDbModelDto): User {
        const user = {
            id: userDbObject._id ? userDbObject._id.toString() : undefined,
            email: userDbObject.email,
            password: userDbObject.password,
            personalInformation: {
                firstName: userDbObject.personalInformation.firstName,
                surname: userDbObject.personalInformation.surname,
                sex: userDbObject.personalInformation.sex,
                documentType: userDbObject.personalInformation.documentType,
                documentNumber: userDbObject.personalInformation.documentNumber,
                phoneNumberCountryCode: userDbObject.personalInformation.phoneNumberCountryCode,
                phoneNumber: userDbObject.personalInformation.phoneNumber
            }
        }
        return new User(user.email, user.password, user.personalInformation, user.id);
    }

    userToUserDbObject(user: User): IUserDbModelDto {
        console.log(user);
        const userDbObject: IUserDbModelDto = {
            _id: user.id ? new Types.ObjectId(user.id) : undefined,
            email: user.email,
            password: user.password,
            personalInformation: {
                firstName: user.personalInformation.firstName,
                surname: user.personalInformation.surname,
                sex: user.personalInformation.sex,
                documentType: user.personalInformation.documentType,
                documentNumber: user.personalInformation.documentNumber,
                phoneNumberCountryCode: user.personalInformation.phoneNumberCountryCode,
                phoneNumber: user.personalInformation.phoneNumber
            }
        }
        return userDbObject;
    }
}