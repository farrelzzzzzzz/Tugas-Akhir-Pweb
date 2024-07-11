<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $gender = $_POST['gender'];
    $ide = $_POST['ide'];
    $day = $_POST['day'];

  
    $file = 'sigin_data.txt';
    $handle = fopen($file, 'a'); 

 
    $data = "Username: $username, Email: $email, Password: $pass, Gender: $gender, Idea: $ide, Date of Birth: $day\n";
    fwrite($handle, $data);

 
    fclose($handle);

    
    header('Location: home/home.html');
    exit();
}
?>
