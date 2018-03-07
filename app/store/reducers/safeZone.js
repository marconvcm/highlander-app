import { SEND_KEEP_ALIVE, REQUEST_OPEN, REQUEST_CLOSE } from "../actions/actionTypes";

const initialState = {
    isOpen: false, 
    token: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_KEEP_ALIVE:
            return { ...state, isOpen: true }
        case REQUEST_OPEN:
            return { ...state, token: action.token }
        case REQUEST_CLOSE:
            return { ...state, isOpen: false, token: null }
        default:
            return state
    }
}

export default reducer;
