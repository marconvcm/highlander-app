import { REQUEST_REGISTER_EMAIL, RECEIVE_USER_ID } from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    email: "marconvcm@gmail.com",
    userId: null
}

export default reducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_USER_ID: 
            return {
                ...state,
                userId: action.id
            };
        case REQUEST_REGISTER_EMAIL:
            return {
                ...state,
                email: action.email,

            };
        default:
            return state;
    }
};

