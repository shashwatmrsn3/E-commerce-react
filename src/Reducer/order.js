const initialState = {
    products: [],
    quantity:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case "ADD_TO_CART_AS_GUEST":
            
            return({...state,products:[...state.products,action.payload.product],quantity:[...state.quantity,action.payload.quantity]})
        case 'ADD_TO_CART_AS_USER':
            return({...state,products:[...state.products,action.payload].product,quantity:[...state.quantity,action.quantity]});
        default:
            return state;
            

    }
}