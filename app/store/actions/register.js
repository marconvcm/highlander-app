import fetch from "cross-fetch";
import { REGISTER_EMAIL, RECEIVE_USER_ID, REQUEST_REGISTER_EMAIL } from "./actionTypes";

export const registerEmail = (email) => {

    return function(dispatch) {

        dispatch(requestRegisterEmail(email))
        return setTimeout(() => dispatch(receiveUserId("1")), 3000)
    }
};

export const receiveUserId = (id) => {
    
    return {
        type: RECEIVE_USER_ID,
        id: id, 
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