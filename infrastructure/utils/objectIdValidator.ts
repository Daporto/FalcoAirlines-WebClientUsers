import {Types} from 'mongoose'

export function isAValidObjectId(id: string){
    const objectId = new Types.ObjectId(id)
    if(objectId.toString() =="id"){
        return true
    }else{
        return false
    }
}