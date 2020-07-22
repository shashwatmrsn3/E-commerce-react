import {createStore} from 'redux';

const initialState = {
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:null,
    loading:true,
    role:''
};

export default function (state= initialState,action){
    switch(action.type){
        case 'LOGGED_IN':
            token:localStorage.setItem('token',action.payload.jwt);
            
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false,
                role:action.payload.role
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

