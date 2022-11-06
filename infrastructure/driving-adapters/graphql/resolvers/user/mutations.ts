import UserCreationDto from '../../../../../application/dtos/IUserCreationDto';
import UserServices from '../../../../../application/services/UserServices';
import UserMapper from '../../../../implementations/mappers/UserMapper';
import UserRepository from '../../../../implementations/repositories/UserRepository';
import serializeError from '../../../../utils/errorSerializer';
import serializeSuccessResponse from '../../../../utils/sucessResponseSerializer';
import { encryptPassword } from '../../../../utils/passwordUtil';
import IUserCreationDto from '../../../../../application/dtos/IUserCreationDto';
const userServices = new UserServices(new UserRepository(), new UserMapper());

const userMutations = {
    createUser: async (_:any, args:any) => {
      try {
          const user: IUserCreationDto = args.user;
          user.password = user.password ? await encryptPassword(user.password) : user.password;
          const newUser = await userServices.registerNewUser(user);
          console.log(newUser)
          return serializeSuccessResponse(newUser);
      } catch (error) {
        console.log(error)
        return serializeError(error);
      }
    }
}



export default userMutations