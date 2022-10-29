import UserDto from "../../application/dtos/UserDto";

export default function serializeSuccessResponse(data: any){
    if(data instanceof UserDto){
        return {
           __typename: "User",
           ...data
        }
    }
}