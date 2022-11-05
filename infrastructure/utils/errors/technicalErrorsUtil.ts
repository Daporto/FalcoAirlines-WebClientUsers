export interface ITechnicalErrorsUtil {
    UnexpectedError: ITechnicalErrorUtil,
    PasswordEncryptionError: ITechnicalErrorUtil
}

interface ITechnicalErrorUtil {
    code: string,
    staticMessage: string
    description: string,
}

export const technicalErrorsUtil: ITechnicalErrorsUtil = {
    UnexpectedError: {
        code: "TE-1",
        staticMessage: "Ups! something unexpected went wrong in the process",
        description: "This error happens when an unexpected error occurred"
    },
    PasswordEncryptionError: {
        code: "TE-2",
        staticMessage: "Ups! something went wrong encrypting the password",
        description: "This error happens when an error occur encrypting the password"
    }
}
