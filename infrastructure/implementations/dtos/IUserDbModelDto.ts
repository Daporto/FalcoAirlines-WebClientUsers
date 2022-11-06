import { Types } from "mongoose";

interface IPersonalInformation {
    firstName: string,
    surname: string,
    sex: string,
    documentType: string,
    documentNumber: string,
    phoneNumberCountryCode: string,
    phoneNumber: string
}

export default interface IUserDbModelDto {
    _id?: Types.ObjectId;
    email: string;
    password: string;
    personalInformation: IPersonalInformation;
}