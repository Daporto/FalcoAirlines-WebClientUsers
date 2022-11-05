export default class User {
    id?: string | undefined;
    email: string;
    password: string;

    constructor(email:string, password:string, id?:string){
        this.email = email;
        this.password = password;
        this.id = id;
    }
}