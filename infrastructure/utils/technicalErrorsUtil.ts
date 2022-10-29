export interface ITechnicalErrorsUtil {
    UnexpectedError: ITechnicalErrorUtil
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
    }
}
