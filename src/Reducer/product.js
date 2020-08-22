const initialState = {
    products : [],
    loading:true
}

export default function productReducer(state = initialState,action){
    switch(action.type){
        case "ALL_PRODUCT_LOADED":
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        

        default:
            return state;
    }
}