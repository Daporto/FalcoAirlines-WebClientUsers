import {User} from '../../entities/User'

export interface RegisterUserInterface {
    execute(user: User): Promise<User>;
}