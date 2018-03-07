import { REQUEST_REGISTER_EMAIL, 
    REQUEST_REGISTER_EMAIL_SUCCESS, 
    REQUEST_REGISTER_EMAIL_ERROR  } from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    email: "",
    userId: null
}

export default reducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_REGISTER_EMAIL_SUCCESS: 
            return {
                ...state,
                userId: action.id
            };
        case REQUEST_REGISTER_EMAIL: 
            return {
                ...state,
                email: action.email,
            };
        
        case REQUEST_REGISTER_EMAIL_ERROR: 
            return initialState;
        
        default:
            return state;
    }
};

