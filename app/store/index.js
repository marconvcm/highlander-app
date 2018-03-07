import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerRegister from './reducers/register';
import reducerSafeZone from './reducers/safeZone';
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger()

const reducers = {
    register: reducerRegister,
    safeZone: reducerSafeZone
};

const root = combineReducers(reducers);

const configureStore = () => { 
    return createStore(
        root, 
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    ); 
}

export default configureStore