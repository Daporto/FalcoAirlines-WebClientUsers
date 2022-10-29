import User from "../../../domain/entities/User";
import IUserRepository from "../../../domain/repositories/IUserRepository";
import MongoDb from '../../driven-adapters/db/mongodb';
import UserDbMapper from "../mappers/UserDbMapper";
const UserModel = require("../../driven-adapters/db/mongodb/models/User") 

export default class UserRepository implements IUserRepository {
    mongoDb:MongoDb;
    userDbMapper:UserDbMapper;

    constructor(){
        this.mongoDb = new MongoDb();
        this.mongoDb.connect()
        this.userDbMapper = new UserDbMapper();
    }

    async saveUser(user: User): Promise<User> {
        const newUserObject = this.userDbMapper.userToUserDbObject(user);
        const savedUser = await UserModel.create(newUserObject);
        const newUser = this.userDbMapper.userDbObjectToUser(savedUser);
        return newUser;
    }
    getUserByUsername(username: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User): boolean {
        throw new Error("Method not implemented.");
    }
}