import TechnicalError from "./TechnicalError";
import { technicalErrorsUtil, ITechnicalErrorsUtil } from "../utils/technicalErrorsUtil";

export default class UnexpectedError extends TechnicalError {
    dynamicMessage?: string;
    constructor(errorMessage?: string){
        const errorInfo = technicalErrorsUtil[UnexpectedError.name as keyof ITechnicalErrorsUtil];
        const message = errorMessage ? errorMessage : errorInfo.staticMessage;
        super(errorInfo.code, message);
    }
}