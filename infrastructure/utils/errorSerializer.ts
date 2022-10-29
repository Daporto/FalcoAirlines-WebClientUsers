import BusinessError from "../../domain/business-errors/BusinessError"

export default function serializeError(error: any) {
    let newError;
    if (error instanceof BusinessError) {
        newError = {
            __typename: "BusinessError",
            ...error
        };
        console.log(newError)
    } else {
        newError = error;
    }
    return newError;
}