<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="header">
        <h1>My Website</h1>
        <p>Resize the browser window to see the efect</p>
    </div>
    <div class="topnav">
            <a href="index.php">Home</a>
            <a href="insertForm.php">Insert</a>
            <a href="#">Contact</a>
            <a class="right" href="#">About</a>
    </div>

    <div class="user-input-container">
        <form action="insertAction.php" method="post"><br>
            <input class="insert-input" type="text" name="user" placeholder="Username" ><br>
            <input class="insert-input" type="text" name="password" placeholder="Password"><br>
            <input id="btn-insert" type="submit" value="Done">
        </form>
    </div>


</body>
</html>
