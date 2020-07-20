

const initialState = {
    products: [],
    isSellerLoggedIn:false,
    sellerName:''
}

export default function sellerReducer(state=initialState,action){
    switch(action.type){
        case 'SELLER_LOGGED_IN':
            return {
                ...state,
                isSellerLoggedIn:true,
                products:action.payload,
                
            }
        default:
            return state;
    }
}

