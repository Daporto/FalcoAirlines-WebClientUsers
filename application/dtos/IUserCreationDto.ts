interface IPersonalInformation {
    firstName: string,
    surname: string,
    sex: string,
    documentType: string,
    documentNumber: string,
    phoneNumberCountryCode: string,
    phoneNumber: string
}


export default interface IUserCreationDto {
    email: string;
    password: string;
    personalInformation: IPersonalInformation;
}