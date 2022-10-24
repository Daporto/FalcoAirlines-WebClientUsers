import { GeneralResponseDto } from "./GeneralResponseDto";

export interface UserResponseDto extends GeneralResponseDto{
    data: {
        id: string
        username: string,
        email: string
    }
}