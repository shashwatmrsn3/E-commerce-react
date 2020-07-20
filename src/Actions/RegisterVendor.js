import {setAlert} from './Alert';
import axios from 'axios';



export const registerVendor = (formData,history) => async dispatch => {
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    try{
        const res = axios.post(`/api/vendor/register`,formData,config);
        history.push('/seller');
        dispatch({
            type:'SELLER_LOGGED_IN',
            payload:res.products
        });
        dispatch(setAlert({message:'Registration successful. You can now sell products in the seller section',type:'success'}));
        
    }catch(err){
        console.log(err);
        dispatch(setAlert({message:'Registration failed. Please try again later',type:'danger'}));
    }
}