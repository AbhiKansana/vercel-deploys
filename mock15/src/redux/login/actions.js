
import axios from 'axios'

export const actionTypes = {
    LOGIN_REQUEST : "LOGIN_REQUEST",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_FAILURE : "LOGIN_FAILURE"
}





function loginRequest(){
    return{
        type : actionTypes.LOGIN_REQUEST       
    }
}

function loginSucess(data){
    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload: data
    }
}


function loginFailure(){
    return{
        type : actionTypes.LOGIN_FAILURE
    }
}


export function mainLoginRequest(obj){
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.post('https://reqres.in/api/login',obj)
        .then(res=>{
            // console.log(res.data)
            dispatch(loginSucess(res.data.token))
        })
        .catch(err=>{
            console.log("login error",err)
            dispatch(loginFailure())
        })
    }
}

