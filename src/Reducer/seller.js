

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
        case 'ADD_PRODUCT_SUCCESSFUL':
            return{
                ...state,
                products:[...state.products,action.payload]
            }
        case 'PRODUCT_LOADED':
            return{
                ...state,
                products:[...state.products,action.payload.data]
            }
        case 'PRODUCT_UPDATED':
            return{
                ...state,
                products: state.products.map(product => (product.id === action.payload.id) ? action.payload : product)
            }  
         
        default:
        return state;
    }
}

