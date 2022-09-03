
import { actionTypes } from "./actions";

const init = {
    isLoading : false,
    isError   : false,
    token     : null
}


export default function loginReducer (state = init,action){
    switch(action.type){
        case actionTypes.LOGIN_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                token : action.payload
            }
        case actionTypes.LOGIN_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        default :
        return state
    }
}