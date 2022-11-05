export interface IInvalidInputErrorsUtil {
    InvalidIdError: IInvalidInputErrorUtil,
    NullValueError: IInvalidInputErrorUtil
}

interface IInvalidInputErrorUtil {
    code: string,
    staticMessage: string
    description: string,
}

export const invalidInputErrorsUtil: IInvalidInputErrorsUtil = {
    InvalidIdError: {
        code: "IIE-1",
        staticMessage: "the sent id is not a valid id",
        description: "This error happens when the client send an invalid id in the request"
    },
    NullValueError: {
        code: "IIE-2",
        staticMessage: "One of the parameters or fields in the request is null",
        description: "This error happens when the client send a null value in one of the requerired parameters or properties"
    }
}
