import UserDto from "../../../../../application/dtos/UserDto";
import UserServices from "../../../../../application/services/UserServices";
import InvalidIdError from "../../../../exceptions/InvalidIdError";
import NullValueError from "../../../../exceptions/NullValueError";
import UserMapper from "../../../../implementations/mappers/UserMapper";
import UserRepository from "../../../../implementations/repositories/UserRepository";
import serializeError from "../../../../utils/errorSerializer";
import { isAValidObjectId } from "../../../../utils/objectIdValidator";
import serializeSuccessResponse from "../../../../utils/sucessResponseSerializer";

const userServices = new UserServices(new UserRepository(), new UserMapper());

const userQueries = {
    getUserById: async (_: any, args: any) => {
      try {
        if(!args.id){
          throw new NullValueError(`The parameter id can not be null`);
        }
        if(!isAValidObjectId(args.id)){
          throw new InvalidIdError();
        }
        const user: UserDto = await userServices.getUserById(args.id);
        return serializeSuccessResponse(user);
      } catch (error) {
        console.log(error);
        return serializeError(error);
      }
    }
  }
  
  export default userQueries
  