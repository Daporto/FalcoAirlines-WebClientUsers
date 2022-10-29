import BusinessError from "../../domain/exceptions/BusinessError"
import UnexpectedError from "../exceptions/UnexpectedError";

export default function serializeError(error: any) {
    let newError;
    if (error instanceof BusinessError) {
        newError = {
            __typename: "BusinessError",
            ...error
        };
        console.log(newError)
    } else {
        const unexpectedError = new UnexpectedError();
        newError = {
            __type: "TechnicalError",
            ...unexpectedError
        }
    }
    return newError;
}