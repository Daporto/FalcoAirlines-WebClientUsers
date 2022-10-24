import { UserCreationDtoInterface } from "./interfaces/UserCreationDtoInterface";

export default class UserCreationDto implements UserCreationDtoInterface {
    username: string;
    password: string;
    email: string;
    constructor(username: string, password:string, email:string){
        this.username = username;
        this.password = password;
        this.email = email;
    }
}