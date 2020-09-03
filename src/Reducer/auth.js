import {createStore} from 'redux';

const initialState = {
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:false,
    loading:true,
    role:'',
    id:''
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
                role:action.payload.role,
                id:action.payload.id
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

