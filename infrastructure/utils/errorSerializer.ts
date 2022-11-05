import BusinessError from "../../domain/exceptions/BusinessError"
import InvalidInputError from "../exceptions/InvalidInputError";
import TechnicalError from "../exceptions/TechnicalError";
import UnexpectedError from "../exceptions/UnexpectedError";

export default function serializeError(error: any) {
    let newError;
    if (error instanceof BusinessError) {
        newError = {
            __typename: "BusinessError",
            ...error
        };
        console.log(newError)
    } else if (error instanceof TechnicalError){
        newError = {
            __typename: "TechnicalError",
            ...error
        };
    } else if(error instanceof InvalidInputError){
        newError = {
            __typename: "InvalidInputError",
            ...error
        }
    } else {
        const unexpectedError = new UnexpectedError();
        newError = {
            __typename: "TechnicalError",
            ...unexpectedError
        }
    }
    console.log(newError);
    return newError;
}