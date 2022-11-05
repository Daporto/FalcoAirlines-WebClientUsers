import {Types} from 'mongoose'

export function isAValidObjectId(id: string){
    try {
        new Types.ObjectId(id);
        return true
    } catch (error) {
        return false
    }
}