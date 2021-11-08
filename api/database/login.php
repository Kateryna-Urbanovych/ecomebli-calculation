<?php

require 'Database.php';

$database = new Database();

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

switch ($obj['type']){
    case 'login': {
        $answer = $database->doRequestWithVar('
                                        SELECT 
                                               password,
                                               name
                                        FROM users WHERE name = :user;', [':user' => $obj['name']], false);
        if($answer[0] && $answer[0]['password'] && password_verify($obj['password'],$answer[0]['password'])){
            echo json_encode(['status' => true, 'cookie' => password_hash($answer[0]['name'], PASSWORD_BCRYPT)]);
        } else {
            echo json_encode(['status' => false]);
        }
        break;
    }
    case 'registration': {
        $password = password_hash($obj['password'], PASSWORD_BCRYPT);
        $answer = $database->doRequestWithVar('
                                        INSERT INTO users(name, password) VALUES (:user, :pass);',
            [':user' => $obj['name'], ':pass' => $password], true);
        echo json_encode(['status' => $answer ? 'success' : 'error']);
        break;
    }
}

