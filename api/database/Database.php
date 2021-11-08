<?php

use DevCoder\DotEnv;

require '../DevCoder.php';

(new DotEnv(false))->load();

class Database
{
    protected $servername = "";
    protected $username = "";
    protected $password = "";
    public $db = "";
    public function __construct(){
        $this->servername = getenv('DATABASE_HOST');
        $this->username = getenv('DATABASE_USER');
        $this->password = getenv('DATABASE_PASSWORD');
        $this->db = getenv('DATABASE_NAME');
    }
    public function doRequestWithNoAnswer($sql, $useDB) {
        try{
            $dsn = "mysql:host=$this->servername;" . (($useDB) ? "dbname=$this->db" : '' . ';charset=utf8');
            $connection = new PDO($dsn, $this->username, $this->password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $connection->prepare($sql);
            $stmt->execute();
            echo $sql . "<br> Success";
        } catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage() . "<br/>";
        }
    }
    public function doRequest($sql, $useDB, $fetchAll) {
        $dsn = "mysql:host=$this->servername;" . (($useDB) ? "dbname=$this->db" : '') . ";charset=utf8";
        $connection = new PDO($dsn, $this->username, $this->password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $connection->prepare($sql);
        $stmt->execute();
        if($fetchAll){
            return $stmt->fetchAll();
        } else {
            return $stmt->fetch();
        }
    }
    public function doRequestWithVar($sql, $variables, $insert) {
        try{
            $dsn = "mysql:host=$this->servername;" . "dbname=$this->db" . ";charset=utf8";
            $connection = new PDO($dsn, $this->username, $this->password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $connection->prepare($sql);
            $stmt->execute($variables);
            if($insert){
                return true;
            } else {
                return $stmt->fetchAll();
            }
        } catch (PDOException $e){
            return $e->getMessage();
        }
    }
}