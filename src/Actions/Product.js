import axios from 'axios';
import{setAlert} from './Alert';

export const addProduct = (formData,history) => async dispatch =>{
    const config = {
        headers:{
            'content-Type':'application/json'
        }
    }

    try{
        const res = await axios.post(`/api/product/addProduct`,formData,config);
        history.push("/seller");
        console.log("new added product"+res.data);
        dispatch({
            type:'ADD_PRODUCT_SUCCESSFUL',
            payload:res.data
        })
        dispatch(setAlert({message:'Product added',type:'success'}));
       
    }catch(err){
        dispatch(setAlert({message:err.response.statusText,type:'danger'}));
    }
} 


export const loadProducts = () => async dispatch=>{
    console.log('insideload products function');
    try{
        const res =await axios.get(`/api/product/products`);
        console.log("load products action result" + res.data)
        dispatch({
            type:'PRODUCT_LOADED',
            payload:res
        })
    }catch(err){
        dispatch(setAlert({message:err.msg,type:'danger'}));
    }
}