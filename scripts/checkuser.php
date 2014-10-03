<?php
//echo "here!!!";
    include('../config.php');
$q=$_REQUEST["q"];
$e=$_REQUEST["e"];

//echo $q;

$result=mysqli_query($con,"select count(*) as c from users where name ='".$q."' and email='".$e."' ") or die("Error: ".mysqli_error($con));
$row = mysqli_fetch_array($result)  or die('Error, query failed1');

$level=1;
if ($row['c']==0 and $q!="")
{
	
	$result1=mysqli_query($con,"INSERT INTO users (name, email, level) VALUES ('".$q."','".$e."','".$level."')");
	//echo "done!!!";
}
$result2=mysqli_query($con,"select * from users where name ='".$q."' and email='".$e."' ") or die("Error: ".mysqli_error($con));
$row2 = mysqli_fetch_array($result2)  or die('Error, query failed1');
echo $row2['level'];

?>