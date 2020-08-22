import axios from 'axios';
import{setAlert} from './Alert';

export const addToCartAsGuest = (id,quantity,product) => async dispatch =>{
    
    dispatch({
        type:'ADD_TO_CART_AS_GUEST',
        payload:{
            id,quantity,product
        }
    });
    dispatch(setAlert({message:"Added to cart",type:"success"}));
}

export const addToCartAsUser = (product,quantity) => async dispatch =>{
    const cart = {
        id:product.id,
        quantity:quantity
    }
    try{
        const res = await axios.post('/api/cart/addToCart',cart);
        dispatch({
            action:'ADD_TO_CART_AS_USER',
            payload:{product,quantity}
        })
    }catch(err){
        dispatch(setAlert({message:err.msg,type:'danger'}));
    }
}