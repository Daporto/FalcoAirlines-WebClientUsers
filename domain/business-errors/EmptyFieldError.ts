import BusinessError from "./BusinessError";

export default class EmptyFieldError extends BusinessError {
    constructor(code: string, message: string){
        super(code, message);
    }
}