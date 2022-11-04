import User from "../../../domain/entities/User";
import IUserRepository from "../../../domain/repositories/IUserRepository";
import MongoDb from '../../driven-adapters/db/mongodb';
import UserDbMapper from "../mappers/UserDbMapper";
import { Types } from "mongoose";
const UserModel = require("../../driven-adapters/db/mongodb/models/User") 

export default class UserRepository implements IUserRepository {
    mongoDb:MongoDb;
    userDbMapper:UserDbMapper;

    constructor(){
        this.mongoDb = new MongoDb();
        this.mongoDb.connect()
        this.userDbMapper = new UserDbMapper();
    }
    async getUserById(id: string): Promise<User> {
        const userDbObject = await UserModel.findById(id);
        console.log(userDbObject);
        if(userDbObject){
            return this.userDbMapper.userDbObjectToUser(userDbObject);
        }else{
            return userDbObject;
        }
    }
    async checkIfEmailExists(email: string): Promise<boolean>{
        const user = await UserModel.findOne({"email":email});
        if(user){
            return true
        }else {
            return false
        }
    }

    async saveUser(user: User): Promise<User> {
        const newUserDbObject = this.userDbMapper.userToUserDbObject(user);
        newUserDbObject._id = new Types.ObjectId();
        const savedUser = await UserModel.create(newUserDbObject);
        const newUser = this.userDbMapper.userDbObjectToUser(savedUser);
        return newUser;
    }
    deleteUser(user: User): boolean {
        throw new Error("Method not implemented.");
    }
}