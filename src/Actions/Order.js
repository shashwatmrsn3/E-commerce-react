import axios from 'axios';
import{setAlert} from './Alert';

export const addToCartAsGuest = (id,quantity,product) => async dispatch =>{
    const order = {
        product:product,
        quantity:quantity
    }
    console.log("quantity:"+quantity);
    dispatch({
        type:'ADD_TO_CART_AS_GUEST',
        payload:{
           order
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

export const removeFromCart = (id) =>  dispatch => {
    
    dispatch({
        type:'REMOVE_FROM_CART',
        payload:id
    });
}

export const placeOrder = (productArray,quantityArray,shippingString) => async dispatch => {
    const orderIdsString = productArray.join(",");
    const quantitiesString =quantityArray.join(",");
    const addressString = shippingString;
    const req = {
        orderIdsString:orderIdsString,
        quantitiesString:quantitiesString,
        addressString:addressString
    }
    try{
        const res = await axios.post("/api/order/placeOrder",req);
        dispatch(setAlert({message:"order placed",type:"success"}));
    }catch(err){
        dispatch(setAlert({message:err.response.data.message,type:"danger"}));
    }
    
}