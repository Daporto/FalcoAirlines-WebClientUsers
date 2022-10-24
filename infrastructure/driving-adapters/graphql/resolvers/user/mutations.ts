import MongoDb from '../../../../driven-adapters/db/mongodb';
const mongoDb = new MongoDb();
import UserCreationDto from '../../../../../application/dtos/UserCreationDto';
import UserServices from '../../../../../application/services/UserServices';
import UserMapper from '../../../../implementations/mappers/UserMapper';
const userServices = new UserServices(new UserMapper());

const userMutations = {
    createUser: async ({user}) => {
        const {username, password, email} = user;
        const userCreationDto = new UserCreationDto(username, password, email);
        
    }
}