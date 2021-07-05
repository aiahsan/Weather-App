import {types} from '../actionMethodes/types';


export const userReducer = (state =null, action) => {
    
    if (action.type === types.signIn) {
        return action.payload
    }
    else if (action.type === types.logOut)
        return null;
       
    return state
    }
