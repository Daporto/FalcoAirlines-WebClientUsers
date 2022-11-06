import IPersonalInformation from "./interfaces/IPersonalInformation";

export default class User {
    id?: string | undefined;
    email: string;
    password: string;
    personalInformation: IPersonalInformation;

    constructor(email:string, password:string, personalInformation: IPersonalInformation, id?:string){
        this.email = email;
        this.password = password;
        this.personalInformation = personalInformation;
        this.id = id;
    }
}