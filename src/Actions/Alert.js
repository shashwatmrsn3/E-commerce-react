import {v1 as uuid} from 'uuid';

export const setAlert = ({message,type}) => dispatch =>{
    const id = uuid;
    
    dispatch({
        type:'SET_ALERT',
        payload:{
            message,type,id
        }
    });

    setTimeout(()=>dispatch({type:'REMOVE_ALERT',payload:id}),5000);
}