<?php

// connection

$host = "localhost";
$user = "root";
$password = "";
$db_name = "definir base de datos";

$connection = new mysqli($host, $user, $password, $db_name);

if ($connection->connect_error) {
    die("Fail to connect the server" . $connection->connect_error);
}
