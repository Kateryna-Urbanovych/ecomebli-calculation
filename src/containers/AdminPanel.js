import React from "react";
import {StyledTable} from "../components/Table";
import {useOrders} from "../hooks/useOrders";

const columns = {
    order_num: {
        name: 'Номер замовлення',
    },
    order_items: {
        name: 'Замовлення',
    },
    name: {
        name: 'Ім\'я',
    },
    email: {
        name: 'Почта'
    },
    tel: {
        name: 'Номер телефону'
    },
    date: {
        name: 'Дата замовлення'
    }
}

export const AdminPanel = () => {
    const {orders, fetchOrders} = useOrders();
    React.useEffect(() => {
        fetchOrders()
    }, [])
    return <StyledTable head={columns} rows={orders}/>
}