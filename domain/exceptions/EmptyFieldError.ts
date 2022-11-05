import BusinessError from "./BusinessError";
import {businessErrorsUtil, IBusinessErrorsUtil} from "../utils/businessExceptionsUtil";


export default class EmptyFieldError extends BusinessError {
    constructor(errorMessage?: string){
        const errorInfo = businessErrorsUtil[EmptyFieldError.name as keyof IBusinessErrorsUtil];
        const message = errorMessage ? errorMessage : errorInfo.staticMessage;
        super(errorInfo.code, message);
    }
}