export interface IBusinessErrorsUtil {
    EmptyFieldError: IBusinessErrorUtil
}

interface IBusinessErrorUtil {
    code: string,
    description: string
}

export const businessErrors: IBusinessErrorsUtil = {
    EmptyFieldError: {
        code: "BE-1",
        description: "One of the required fields is empty"
    }
}
