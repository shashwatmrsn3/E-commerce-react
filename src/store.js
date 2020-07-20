import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducer/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState= {};
const middleware = [thunk];
const store= createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
