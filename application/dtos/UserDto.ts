interface IPersonalInformation {
    firstName: string,
    surname: string,
    sex: string,
    documentType: string,
    documentNumber: string,
    phoneNumberCountryCode: string,
    phoneNumber: string
}

export default class UserDto {
    id:string;
    email: string;
    personalInformation: IPersonalInformation;

    constructor(id: string, email:string, personalInformation: IPersonalInformation){
        this.id = id;
        this.email = email;
        this.personalInformation = personalInformation;
    }
}