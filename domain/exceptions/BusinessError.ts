export default class BusinessError extends Error{
    errorCode: string;
    errorMessage: string
    constructor(errorCode: string, errorMessage: string){
        super(errorMessage);
        this.errorMessage = errorMessage
        this.errorCode = errorCode;
    }
}