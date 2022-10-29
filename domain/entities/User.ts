export default class User {
    id?: string | undefined;
    username: string;
    password: string;
    email: string;

    constructor(username:string, password:string, email:string, id?:string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.id = id;
    }
}