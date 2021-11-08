import {types} from "./types";

const initState = {
    products: undefined,
    isLoading: false,
    error: undefined,
}

export const productsReducer = (state = initState, actions) => {
    switch (actions.type){
        case types.GET_PRODUCTS:{
            return{
                products: actions.payload,
                isLoading: false,
                error: undefined
            };
        }
        case types.LOADING_PRODUCTS:{
            return{
                ...state,
                isLoading: true,
            };
        }
        case types.FAILED_PRODUCTS:{
            return{
                products: undefined,
                isLoading: false,
                error: actions.payload
            };
        }
        default: return state
    }
}