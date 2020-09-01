import axios from 'axios';
import {setAlert} from './Alert';
import {useHistory} from 'react-router';

export const login = (formData,source,history) => async dispatch =>{
    console.log('inside login yay');
    const {email,password} = formData;
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    try{
        const res = await axios.post(`/api/user/login`,formData,config);
        if(source==="cart"){
            dispatch({
                type:'LOGGED_IN',
                payload:res.data
            });
            history.push("/cart")
        }else{
        dispatch({
            type:'LOGGED_IN',
            payload:res.data
        });
    }
        if(res.data.role==='ROLE_VENDOR'){
           const  products = await axios.get(`/api/product/products`);
           console.log(products.data);
           console.log("logged in user is vendor");
            dispatch({
                type:'SELLER_LOGGED_IN',
                payload:products.data
           })
        }
        console.log('logged in');
    }catch(err){
        
        dispatch(setAlert({message:err.response.data.message,type:"danger"})); 
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

