import { LOGIN,LOGTO } from "../constants/login"

export function login(data){
    return{
        type:LOGIN,
        data
    }
}
export function logto(data){
    return{
        type:LOGTO,
        data
    }
}