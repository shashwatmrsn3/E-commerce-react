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

export const editProduct = (data,history) => async dispatch => {
    console.log(data.get('name')+data.get('description')+data.get('stock')+data.get('price')+data.get('image')+data.get("id"));
    try{
        const res = await axios.post(`/api/product/update`,data);
        history.push("/seller");
        dispatch({
            type:'PRODUCT_UPDATED',
            payload:res.data
        });
        dispatch(setAlert({message:'Product Updated',type:'success'}));
    }catch(err){
        dispatch(setAlert({message:err.msg,type:'danger'}))
    }
}

export const loadAllProduct = () => async dispatch =>{
    try{
        const res = await axios.get("/api/product/allproducts");
        dispatch({
            type:'ALL_PRODUCT_LOADED',
            payload:res.data
        })

    }catch(err){
        dispatch(setAlert({message:"Internal error. Please try again later",type:"danger"}))
    }
}

export const rateProduct =(data,id,history) => async dispatch =>{
    try{
        const res = await axios.post(`/api/rating/rate/${id}`,data);
        
        dispatch(setAlert({message:'Question asked',type:'success'}));
        history.push("/");
    }catch(e){
        dispatch(setAlert({message:e.response.data.message,type:'danger'}));
    }
}