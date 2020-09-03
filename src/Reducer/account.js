const initialState = {
    name:'',
    email:'',
    orders:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case "ACCOUNT_INFORMATION_LOADED":
            return{
                ...state,
                name:action.payload.name,
                email:action.payload.email,
                orders:action.payload.orders,
                loading:false
            }
        default: 
            return state
    }
}