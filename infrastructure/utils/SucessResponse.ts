class GenericSuccessResponse {
    message: string;
    constructor(message?: string){
        this.message = message ? message : "The operation was success";
    }
}