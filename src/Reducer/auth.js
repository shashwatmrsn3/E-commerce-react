import {createStore} from 'redux';
import setAuthToken from '../Utils/setAuthToken';

const initialState = {
    token:'',
    user:null,
    isAuthenticated:false,
    loading:true,
    role:'',
    id:''
};

export default function (state= initialState,action){
    switch(action.type){
        case 'LOGGED_IN':
            localStorage.setItem('token',action.payload.jwt);
            setAuthToken(action.payload.jwt);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false,
                role:action.payload.role,
                id:action.payload.id,
                token:action.payload.jwt
            }
        case 'REGISTER_SUCCESSFUL':
            token:localStorage.setItem('token',action.payload.jwt);    
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                role:action.payload.role

            }
        default:
            return state
    }
}

