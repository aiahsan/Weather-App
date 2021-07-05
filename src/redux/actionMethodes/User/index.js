import {types} from '../types'
export const LogOut=()=>{
    return { type: types.logOut, payload: null }    
}
export const Login=(payload)=>{
    return {type:types.signIn,payload:payload}
}
