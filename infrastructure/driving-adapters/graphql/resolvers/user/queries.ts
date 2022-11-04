import UserServices from "../../../../../application/services/UserServices";
import UserMapper from "../../../../implementations/mappers/UserMapper";
import UserRepository from "../../../../implementations/repositories/UserRepository";
import serializeError from "../../../../utils/errorSerializer";
import serializeSuccessResponse from "../../../../utils/sucessResponseSerializer";

const userServices = new UserServices(new UserRepository(), new UserMapper());

const userQueries = {
    getUserById: async (_: any, args: any) => {
      try {
        const user = await userServices.getUserById(args.id);
        return serializeSuccessResponse(user);
      } catch (error) {
        console.log(error);
        return serializeError(error);
      }
    }
  }
  
  export default userQueries
  