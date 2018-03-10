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
            type: REQUEST_OPEN,
            userId: userId
        });

        return api(`open/${userId}`, "PUT").then(r => {    
            if (r.status == "200") {
                return r.json()
            } else {
                return Promise.reject("403")
            }
        }).then(j => {
            dispatch({
                type: REQUEST_OPEN_SUCCESS,
                token: j.token,
            })
        }).catch(() => {
            dispatch({
                type: REQUEST_OPEN_ERROR,
                token: null,
            })
        })
    }
}

export const requestClose = (token) => {

    return (dispatch) => {
        dispatch({
            type: REQUEST_CLOSE,
        });
        return api(`close/${token}`, `DELETE`).then(() => {
            dispatch({
                type: REQUEST_CLOSE_SUCCESS
            });
        }).catch(() => {
            dispatch({
                type: REQUEST_CLOSE_ERROR
            });
        });
    }
}

export const sendKeepAlive = (token) => {

    return (dispatch) => {
        dispatch({
            type: SEND_KEEP_ALIVE,
        });
        return api(`keepalive/${token}`).then(() => {
            dispatch({
                type: SEND_KEEP_ALIVE_SUCCESS
            });
        }).catch(() => {
            dispatch({
                type: SEND_KEEP_ALIVE_ERROR
            });
        });
    }
}
