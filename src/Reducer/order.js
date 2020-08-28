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
                       quantity:parseInt(action.payload.order.quantity) + parseInt((state.products[id] == undefined ? 0 : state.products[id].quantity))
                   }
                },
                cartvalue:state.cartvalue + action.payload.order.quantity * action.payload.order.product.price,
                cartQuantity: parseInt(state.cartQuantity) + parseInt(action.payload.order.quantity)
           }
        default:
            return state;
            

    }
}