import {combineReducers} from 'redux';
import auth from './auth';
import {alert} from './alert';
import sellerReducer from './seller';
import productReducer from './product';
import orderReducer from './order';

const rootReducer = combineReducers(
    {
        auth,alert,sellerReducer,productReducer,orderReducer
    }
);

export default rootReducer;