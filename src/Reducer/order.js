const initialState = {
        products:{

        },
        cartvalue:0,
        cartQuantity:0
    
}

export default function(state = initialState,action){
    switch(action.type){
    
        case "ADD_TO_CART_AS_GUEST":
            const id = action.payload.order.product.id;
            
           return{
                ...state,
                products:{
                    ...state.products,
                   [id]:{
                       name:action.payload.order.product.name,
                       quantity:parseInt(action.payload.order.quantity) + parseInt((state.products[id] == undefined ? 0 : state.products[id].quantity)),
                       price:action.payload.order.product.price
                   }
                },
                cartvalue:state.cartvalue + action.payload.order.quantity * action.payload.order.product.price,
                cartQuantity: parseInt(state.cartQuantity) + parseInt(action.payload.order.quantity)
           }
        case "REMOVE_FROM_CART":
            const quantity = state.products[action.payload].quantity;
            const value = state.products[action.payload].price * quantity;
            delete state.products[action.payload];
            return{
                ...state,
                products:{
                    ...state.products
                },
                cartvalue:state.cartvalue - value,
                cartQuantity : state.cartQuantity - quantity   
            }
        default:
            return state;
            

    }
}