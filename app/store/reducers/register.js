import { REGISTER_EMAIL, RECEIVE_USER_ID } from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    email: "marconvcm@gmal.com",
    userId: null
}

export default reducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_USER_ID: 
            return {
                ...state,
                userId: action.id
            };
        case REGISTER_EMAIL:
            return {
                ...state,
                email: action.email
            };
        default:
            return state;
    }
};

