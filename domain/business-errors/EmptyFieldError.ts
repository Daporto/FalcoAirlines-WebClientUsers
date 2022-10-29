import BusinessError from "./BusinessError";
import {businessErrors, IBusinessErrorsUtil} from "../utils/businessErrors";


export default class EmptyFieldError extends BusinessError {
    constructor(message: string){
        const code = businessErrors[EmptyFieldError.name as keyof IBusinessErrorsUtil].code;
        super(code, message);
    }
}