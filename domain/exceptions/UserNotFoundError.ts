import BusinessError from "./BusinessError";
import {businessErrorsUtil, IBusinessErrorsUtil} from "../utils/businessExceptionsUtil";

export default class UserNotFoundError extends BusinessError {
    dynamicErrorMessage?: string;
    constructor(errorMessage?: string){
        const errorInfo = businessErrorsUtil[UserNotFoundError.name as keyof IBusinessErrorsUtil];
        const message = errorMessage ? errorMessage : errorInfo.staticMessage;
        super(errorInfo.code, message);
    }
}