<?php

require_once "config.php";

$username = $_POST['user'];
$userpass = $_POST["password"];

$result = "INSERT INTO 'definir tabla' (user, password) VALUES ($username, $userpass)";

if ($connection->query($result) === true) {
    echo "New Record inserted";
} else {
    echo "Fail to inserted data" . $result . "<br>" . $connection->error;
}

$connection->close();
