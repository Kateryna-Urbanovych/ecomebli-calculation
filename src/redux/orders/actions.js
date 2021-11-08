import {types} from "./types";

export const ordersActions = Object.freeze({
    getOrders: (data) => ({
        type: types.GET_ORDERS,
        payload: data
    }),
    loadingOrders: () => ({
        type: types.LOADING_ORDERS
    }),
    failedOrders: (error) => ({
        type: types.FAILED_ORDERS,
        payload: error,
    }),
    saveOrder: (data) => ({
        type: types.SAVE_ORDER,
        payload: data,
    })
})