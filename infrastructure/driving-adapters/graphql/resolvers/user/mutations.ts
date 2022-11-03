import UserCreationDto from '../../../../../application/dtos/UserCreationDto';
import UserServices from '../../../../../application/services/UserServices';
import UserMapper from '../../../../implementations/mappers/UserMapper';
import UserRepository from '../../../../implementations/repositories/UserRepository';
import serializeError from '../../../../utils/errorSerializer';
import serializeSuccessResponse from '../../../../utils/sucessResponseSerializer';
import { encryptPassword } from '../../../../utils/passwordUtil';
const userServices = new UserServices(new UserRepository(), new UserMapper());

const userMutations = {
    createUser: async (_:any, args:any) => {
      try {
            const {
              user: {
                username,
                password,
                email
              }
            } = args
          const encryptedPassword = await encryptPassword(password);
          const userCreationDto = new UserCreationDto(username, encryptedPassword, email);
          const newUser = await userServices.registerNewUser(userCreationDto);
          console.log(newUser)
          return serializeSuccessResponse(newUser);
      } catch (error) {
        console.log(error)
        return serializeError(error);
      }
    }
}



export default userMutations