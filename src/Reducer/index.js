import {combineReducers} from 'redux';
import auth from './auth';
import {alert} from './alert';
import sellerReducer from './seller';
import productReducer from './product';

const rootReducer = combineReducers(
    {
        auth,alert,sellerReducer,productReducer
    }
);

export default rootReducer;