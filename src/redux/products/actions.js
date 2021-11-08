import {types} from "./types";

export const productsActions = Object.freeze({
    saveProducts: (data) => {
        return{
            type: types.GET_PRODUCTS,
            payload: data
        }
    },
    loadingProducts: () => ({
        type: types.LOADING_PRODUCTS
    }),
    failedProducts: (error) => ({
        type: types.FAILED_PRODUCTS,
        payload: error,
    })
})