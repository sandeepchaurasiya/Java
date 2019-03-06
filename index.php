<?php
$conn = mysqli_connect("localhost","root","","testing");

?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
<?php

$email = $_GET["email"];
$hash = base64_Decode($email);
//$data = json_decode($email);
//$ann = $data['email'];
$query = "INSERT INTO `gmail_addon`(`email`) VALUES ('".$hash."')";
//mysqli_query($conn,$query);
if (mysqli_query($conn, $query)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


?>
	<h1>Hello World.</h1>
</body>
</html>




