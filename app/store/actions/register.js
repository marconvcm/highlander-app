import api from '../../api'
import { 
    REQUEST_REGISTER_EMAIL, 
    REQUEST_REGISTER_EMAIL_SUCCESS, 
    REQUEST_REGISTER_EMAIL_ERROR 
} from "./actionTypes";

export const registerEmail = (email) => {

    return function(dispatch) {

        dispatch({
            type: REQUEST_REGISTER_EMAIL,
            email: email, 
            isLoading: true
        });

        return api('register', 'POST', { email }).then(r => r.json()).then(j => {
            dispatch({
                type: REQUEST_REGISTER_EMAIL_SUCCESS,
                id: id, 
                isLoading: false
            });
        }).catch(() => {
            dispatch({
                type: REQUEST_REGISTER_EMAIL_ERROR,
                id: null, 
                isLoading: false
            });
        });
    }
};