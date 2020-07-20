import {combineReducers} from 'redux';
import auth from './auth';
import {alert} from './alert';
import sellerReducer from './seller';

const rootReducer = combineReducers(
    {
        auth,alert,sellerReducer
    }
);

export default rootReducer;