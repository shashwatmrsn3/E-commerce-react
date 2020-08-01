import axios from 'axios';
import{setAlert} from './Alert';

export const addProduct = (data,history) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }

    console.log(data.get('name'));
    console.log(data.get('description'));
    console.log(data.get('price'));
    console.log(data.get('stock'));
    console.log(data.get('image'));

    try{
        const res = await axios.post(`/api/product/addProduct`,data);
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