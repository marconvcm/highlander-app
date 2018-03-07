import fetch from "cross-fetch";
import { REGISTER_EMAIL, RECEIVE_USER_ID, REQUEST_REGISTER_EMAIL } from "./actionTypes";

export const registerEmail = (email) => {

    return function(dispatch) {
        dispatch(requestRegisterEmail(email))
        return fetch("https://highlander-server.herokuapp.com/register", { 
            method: "POST", 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ email: email })
        })
        .then(r => { console.log(r); return r })
        .then(r => r.json())
        .then(j => dispatch(receiveUserId(j.id)))
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