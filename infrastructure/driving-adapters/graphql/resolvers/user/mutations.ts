import UserCreationDto from '../../../../../application/dtos/UserCreationDto';
import UserServices from '../../../../../application/services/UserServices';
import UserMapper from '../../../../implementations/mappers/UserMapper';
import UserRepository from '../../../../implementations/repositories/UserRepository';
import serializeError from '../../../../utils/errorSerializer';
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
          const userCreationDto = new UserCreationDto(username, password, email);
          const newUser = await userServices.registerNewUser(userCreationDto);
          console.log(newUser)
          return newUser;
      } catch (error) {
        return serializeError(error);
      }
    }
}



export default userMutations