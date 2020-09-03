import {combineReducers} from 'redux';
import auth from './auth';
import {alert} from './alert';
import sellerReducer from './seller';
import productReducer from './product';
import orderReducer from './order';
import accountReducer from './account' 

const rootReducer = combineReducers(
    {
        auth,alert,sellerReducer,productReducer,orderReducer,accountReducer
    }
);

export default rootReducer;