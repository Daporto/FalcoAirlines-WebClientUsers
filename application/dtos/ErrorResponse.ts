import { GeneralResponseDto } from "./GeneralResponseDto";

export interface ErrorResponse extends GeneralResponseDto{
    errorDescription: string;
}