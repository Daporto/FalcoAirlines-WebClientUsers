import PasswordEncryptionError from "../exceptions/PasswordEncryptionError";

const bcrypt = require('bcrypt');
export function encryptPassword(password: string): Promise<string>{
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function(err: any, hash: string){
            if(err){
                reject(new PasswordEncryptionError());
            } else {
                resolve(hash);               
            }           
        })
    })
}