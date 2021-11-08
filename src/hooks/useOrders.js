import {ordersActions as actions} from "../redux/orders/actions";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl} from "../constants/baseUrl";


export const useOrders = () => {
    const selector = (state) => state.orders;
    const orders = useSelector(selector);
    const dispatch = useDispatch();
    const fetchOrders = () => {
        dispatch(actions.loadingOrders());
        fetch(baseUrl + '/api/database/order.php', {
            method: 'POST',
            body: JSON.stringify({
                "type": "get"
            })
        })
            .then(response => {
                    if(response.ok){
                        return response;
                    } else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    throw new Error(error.message);
                })
            .then(response => response.json())
            .then(response => {
                dispatch(actions.getOrders(response.data || []));
            })
            .catch(e => dispatch(actions.failedOrders(new Error(e).message)))
    }
    const saveOrder = (data) => {
        dispatch(actions.loadingOrders());
        fetch(baseUrl + '/api/database/order.php', {
            method: 'POST',
            body: JSON.stringify({
                "tel": data.tel,
                "name": data.name,
                "product": data.product,
                "type": "save",
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                    if(response.ok){
                        return response;
                    } else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    throw new Error(error.message);
                })
            .then(response => response.json())
            .then(response => {
                dispatch(actions.saveOrder(response));
            })
            .catch(e => dispatch(actions.failedOrders(new Error(e).message)))
    }
    return {
        fetchOrders,
        saveOrder,
        orders: orders.orders,
        loading: orders.isLoading,
        error: !Boolean(orders.products) || !!orders.error,
    };
}