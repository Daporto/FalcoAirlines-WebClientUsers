export default class InvalidInputError extends Error {
    errorCode: string;
    errorMessage: string
    constructor(code: string, errorMessage: string){
        super(errorMessage);
        this.errorMessage = errorMessage
        this.errorCode = code;
    }
}