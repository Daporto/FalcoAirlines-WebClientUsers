import InvalidInputError from "./InvalidInputError";
import { invalidInputErrorsUtil, IInvalidInputErrorsUtil } from "../utils/errors/invalidInputErrorsUtil";

export default class InvalidIdError extends InvalidInputError {
    constructor(){
        const errorInfo = invalidInputErrorsUtil[InvalidIdError.name as keyof IInvalidInputErrorsUtil];
        super(errorInfo.code, errorInfo.staticMessage);
    }
}