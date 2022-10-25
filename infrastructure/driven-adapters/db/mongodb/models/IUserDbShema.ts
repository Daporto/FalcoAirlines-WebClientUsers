import { Types } from "mongoose";

export default interface userSchemaInterface {
    _id: Types.ObjectId,
    username: string,
    password: string,
    email: string
}