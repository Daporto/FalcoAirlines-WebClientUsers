import TechnicalError from "./TechnicalError";
import { technicalErrorsUtil, ITechnicalErrorsUtil } from "../utils/errors/technicalErrorsUtil";

export default class PasswordEncryptionError extends TechnicalError {
    constructor(){
        const errorInfo = technicalErrorsUtil[PasswordEncryptionError.name as keyof ITechnicalErrorsUtil];
        super(errorInfo.code, errorInfo.staticMessage);
    }
}