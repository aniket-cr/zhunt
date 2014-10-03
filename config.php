<?php
	$IP="localhost";
	$user="huntadmin";
//	$user = "root";
//	$pass = "";
	$pass="H[2~iH{1s!9)";
	$db="thunt";
	$con=mysqli_connect($IP,$user,$pass,$db);
	if (mysqli_connect_errno()) {echo "Failed to connect to MySQL: " . mysqli_connect_error();}
?>