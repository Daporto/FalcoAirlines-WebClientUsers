export interface IBusinessErrorsUtil {
    EmptyFieldError: IBusinessErrorUtil,
    EmailAlreadyExistsError: IBusinessErrorUtil,
    UserNotFoundError: IBusinessErrorUtil
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
    },
    EmailAlreadyExistsError: {
        code: "BE-2",
        staticMessage: "This Email Already is registered",
        description: "The email that is user is trying to register already is in use"
    },
    UserNotFoundError: {
        code: "BE-3",
        staticMessage: "User could not be Found",
        description: "When user is not found with the attribute values indicated by the client"
    }
}
