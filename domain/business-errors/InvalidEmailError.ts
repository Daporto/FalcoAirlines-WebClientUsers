import BusinessError from "./BusinessError";

export default class InvalidEmailError extends BusinessError {
    constructor(code: string, message: string){
        super(code, message);
    }
}