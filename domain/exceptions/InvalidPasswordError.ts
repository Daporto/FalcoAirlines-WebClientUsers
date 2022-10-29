import BusinessError from "./BusinessError";

export default class InvalidPasswordError extends BusinessError {
    constructor(code: string, message: string){
        super(code, message);
    }
}