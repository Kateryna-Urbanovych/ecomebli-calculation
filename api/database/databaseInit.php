<?php


require 'Database.php';

$database = new Database();

$database->doRequestWithNoAnswer("CREATE DATABASE IF NOT EXISTS $database->db", false);
$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS products (
                                            product_id int NOT NULL AUTO_INCREMENT,
                                            name varchar(255) NOT NULL,
                                            image_src varchar(255) NOT NULL,
                                            PRIMARY KEY (product_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                        ', true);
$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS types (
                                            type_id int NOT NULL AUTO_INCREMENT,
                                            name varchar(255) NOT NULL,
                                            price float,
                                            currency varchar(255),
                                            product_id int NOT NULL,
                                            PRIMARY KEY (type_id),
                                            FOREIGN KEY (product_id) REFERENCES products(product_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
                                        ', true);

$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS users (
                                            user_id int NOT NULL AUTO_INCREMENT,
                                            name varchar(255) NOT NULL,
                                            password varchar(255) NOT NULL,
                                            PRIMARY KEY (user_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                        ', true);

$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS customers (
                                            customer_id int NOT NULL AUTO_INCREMENT,
                                            name varchar(255) NOT NULL,
                                            email varchar(255),
                                            tel varchar(255) NOT NULL,
                                            PRIMARY KEY (customer_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                        ', true);

$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS orders (
                                            order_id int NOT NULL AUTO_INCREMENT,
                                            date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                            customer_id int NOT NULL,
                                            PRIMARY KEY (order_id),
                                            FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                        ', true);

$database->doRequestWithNoAnswer('
                                        CREATE TABLE IF NOT EXISTS order_items (
                                            order_item_id int NOT NULL AUTO_INCREMENT,
                                            product_id int NOT NULL,
                                            order_id int NOT NULL,
                                            quantity int NOT NULL DEFAULT 1,
                                            PRIMARY KEY (order_item_id),
                                            FOREIGN KEY (product_id) REFERENCES products(product_id),
                                            FOREIGN KEY (order_id) REFERENCES orders(order_id)
                                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
                                        ', true);


