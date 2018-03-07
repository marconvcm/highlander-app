import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerRegister from './reducers/register';
import reducerSafeZone from './reducers/safeZone';

const reducers = {
    register: reducerRegister,
    safeZone: reducerSafeZone
};

const root = combineReducers(reducers);

const configureStore = () => { 
    return createStore(
        root, 
        applyMiddleware(thunkMiddleware)
    ); 
}

export default configureStore