import api from '../../api'
import { 
    REQUEST_REGISTER_EMAIL, 
    REQUEST_REGISTER_EMAIL_SUCCESS, 
    REQUEST_REGISTER_EMAIL_ERROR 
} from "./actionTypes";

export const registerEmail = (email) => {

    return function(dispatch) {
        dispatch(requestRegisterEmail(email))

        return api("/register", "POST", { email })
                .then(r => { console.log(r); return r })
                .then(r => r.json())
                .then(j => dispatch(requestRegisterEmailSuccess(j.id)))
    }
};

export const requestRegisterEmailSuccess = (id) => {
    
    return {
        type: REQUEST_REGISTER_EMAIL_SUCCESS,
        id: id, 
        isLoading: false
    }
};

export const requestRegisterEmailError = () => {
    
    return {
        type: REQUEST_REGISTER_EMAIL_ERROR,
        id: null, 
        isLoading: false
    }
};

export const requestRegisterEmail = (email) => {
    
    return {
        type: REQUEST_REGISTER_EMAIL,
        email: email, 
        isLoading: true
    }
};