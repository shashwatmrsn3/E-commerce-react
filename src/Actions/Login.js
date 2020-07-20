import axios from 'axios';
import {setAlert} from './Alert';

export const login = (formData) => async dispatch =>{
    console.log('inside login yay');
    const {email,password} = formData;
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    try{
        const res = await axios.post(`/api/user/login`,formData,config);
        dispatch({
            type:'LOGGED_IN',
            payload:res.data
        });
        if(res.data.role==='ROLE_VENDOR'){
           const products = getProductsByVendor;
           console.log(products);
           console.log("logged in user is vendor");
            dispatch({
               type:'SELLER_LOGGED_IN',
                payload:products
           })
        }
        console.log('logged in');
    }catch(err){
        console.log('login failed');
    }
}

export const register = (formData) => async dispatch =>{
    console.log('inside register action');
    console.log(formData);
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try{
        const res = await axios.post(`/api/user/register`,formData,config);
        
        dispatch({
            payload:res,
            type:'REGISTER_SUCCESSFUL'
        });
        dispatch(setAlert({message:'Registration success',type:'success'}));
    }catch(err){
        dispatch(setAlert({message:'Registration failed. Please try again with different email ',type:'danger'}));
        console.log(err);
    }

}

const getProductsByVendor = () =>async dispatch => {
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/product/products`,config);
        console.log("inside get products" + res.data);
        return res.data;
    }catch(err){
        dispatch(setAlert({message:err.message,type:'danger'}));
    }
    
}