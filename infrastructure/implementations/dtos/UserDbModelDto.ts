import { Types } from "mongoose";

export default class UserDbModelDto {
    _id: Types.ObjectId;
    username: string;
    password: string;
    email: string;
    constructor(_id: Types.ObjectId, username:string, password: string, email:string){
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}