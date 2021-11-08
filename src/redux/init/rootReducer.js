import {combineReducers} from "redux";
import {productsReducer as products} from "../products/reducer";
import {ordersReducer as orders} from "../orders/reducer";

export const rootReducer = combineReducers({
    products,
    orders
})
