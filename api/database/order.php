<?php
require 'Database.php';

$database = new Database();

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

switch ($obj['type']){
    case 'save': {
        $customer = $database->doRequestWithVar('
            SELECT customer_id FROM customers WHERE tel = :tel;
        ', ['tel' => $obj['tel']], false);
        if($customer[0]){
            $customer_id = $customer[0]['customer_id'];
        } else {
            $customer_id = $database->doRequestWithVar('
                INSERT INTO customers(name, tel) VALUES(:name, :tel);
                SELECT LAST_INSERT_ID();
            ', ['tel' => $obj['tel'], 'name' => $obj['name']], false);
        }
        $order_id = $database->doRequestWithVar('
                INSERT INTO orders(customer_id) VALUES (:id);
                SELECT LAST_INSERT_ID();
            ', ['id' => $customer_id], false);
        echo json_encode($order_id);
        $database->doRequestWithVar('
            INSERT INTO order_items(order_id, product_id) VALUES (:order, :product);
        ', ['order' => $order_id, 'product' => $obj['product']], true);
        echo json_encode(['status' => 'success', 'data' => $order_id]);
        break;
    }
    case 'get': {
        $orders = $database->doRequest('SELECT * FROM orders JOIN order_items using(order_id)', true, true);
        echo json_encode(['status' => 'success', 'data' => $orders]);
        break;
    }
}
