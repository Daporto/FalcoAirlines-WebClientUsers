import { Types } from "mongoose";

export default class UserDbModelDto {
    _id?: Types.ObjectId;
    username: string;
    password: string;
    email: string;
    constructor(username:string, password: string, email:string, _id?: Types.ObjectId, ){
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}