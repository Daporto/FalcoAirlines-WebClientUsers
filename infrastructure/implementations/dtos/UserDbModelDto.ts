import { Types } from "mongoose";

export default class UserDbModelDto {
    _id?: Types.ObjectId;
    email: string;
    password: string;
    constructor(email:string, password: string, _id?: Types.ObjectId, ){
        this._id = _id;
        this.email = email;
        this.password = password;
    }
}