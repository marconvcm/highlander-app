import { 
    REQUEST_OPEN,
    REQUEST_OPEN_ERROR,
    REQUEST_OPEN_SUCCESS,
    REQUEST_CLOSE,
    REQUEST_CLOSE_ERROR,
    REQUEST_CLOSE_SUCCESS,
    SEND_KEEP_ALIVE,
    SEND_KEEP_ALIVE_ERROR,
    SEND_KEEP_ALIVE_SUCCESS 
} from "../actions/actionTypes";

const initialState = {
    isOpen: false,
    isLoading: true, 
    isAccessDenied: false, 
    token: null,
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case REQUEST_OPEN: 
            return { ...state, isLoading: true, userId: action.userId };
        case REQUEST_OPEN_ERROR: 
            return { ...state, isAccessDenied: true, token: action.token }; 
        case REQUEST_OPEN_SUCCESS: 
            return { ...state, isOpen: true, isAccessDenied: false, token: action.token }; 
        case REQUEST_CLOSE: 
            return { ...state, isLoading: true }; 
        case REQUEST_CLOSE_ERROR: 
            return { ...state, isOpen: false }; 
        case REQUEST_CLOSE_SUCCESS: 
            return { ...state, isLoading: false, isOpen: false, token: null }; 
        case SEND_KEEP_ALIVE: 
            return { ...state, isLoading: true, isOpen: true, }; 
        case SEND_KEEP_ALIVE_ERROR: 
            return { ...state, isLoading: false, isOpen: false, token: null }; 
        case SEND_KEEP_ALIVE_SUCCESS: 
            return { ...state }; 
        default:
            return state;
    }
}

export default reducer;
