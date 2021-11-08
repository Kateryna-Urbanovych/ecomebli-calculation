import {types} from "./types";

const initState = {
    orders: undefined,
    isLoading: false,
    error: undefined,
}

export const ordersReducer = (state = initState, actions) => {
    switch (actions.type){
        case types.GET_ORDERS:{
            return{
                orders: actions.payload,
                isLoading: false,
                error: undefined
            };
        }
        case types.LOADING_ORDERS:{
            return{
                ...state,
                isLoading: true,
            };
        }
        case types.FAILED_ORDERS:{
            return{
                products: undefined,
                isLoading: false,
                error: actions.payload
            };
        }
        default: return state
    }
}