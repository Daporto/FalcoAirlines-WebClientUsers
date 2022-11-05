import InvalidInputError from "./InvalidInputError";
import { invalidInputErrorsUtil, IInvalidInputErrorsUtil } from "../utils/errors/invalidInputErrorsUtil";

export default class NullValueError extends InvalidInputError {
    constructor(errorMessage?: string){
        const errorInfo = invalidInputErrorsUtil[NullValueError.name as keyof IInvalidInputErrorsUtil];
        const message = errorMessage ? errorMessage : errorInfo.staticMessage;
        super(errorInfo.code, message);
    }
}