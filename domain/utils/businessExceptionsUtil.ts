export interface IBusinessErrorsUtil {
    EmptyFieldError: IBusinessErrorUtil
}

interface IBusinessErrorUtil {
    code: string,
    description: string,
    staticMessage: string
}

export const businessErrorsUtil: IBusinessErrorsUtil = {
    EmptyFieldError: {
        code: "BE-1",
        staticMessage: "One of the required fields is missing",
        description: "One of the required fields is empty"
    }
}
