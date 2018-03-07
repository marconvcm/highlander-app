import api from '../../api'
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
} from "./actionTypes";


export const requestOpen = (userId) => {

    return (dispatch) => {

        dispatch({
            action: REQUEST_OPEN,
            userId: userId
        });

        return api(`/open/${userId}`, "POST")
                .then(r =>  dispatch(requestOpenSuccess(r.text())))
    }
}

export const requestOpenSuccess = (token) => {
    
    return {
        action: REQUEST_OPEN,
        token: token,
    }
}

export const requestOpenError = () => {

    return {
        action: REQUEST_OPEN,
        token: null,
    }
}


export const requestClose = (state, action) => {

}
export const requestCloseError = (state, action) => {

}
export const requestCloseSuccess = (state, action) => {

}


export const sendKeepAlive = (state, action) => {

}
export const sendKeepAliveError = (state, action) => {

}
export const sendKeepAliveSuccess = (state, action) => {

}