<?php
    include('../config.php');

$q=$_REQUEST["ans"];
$u=$_REQUEST["user"];
$em=$_REQUEST["email"];


$result=mysqli_query($con,"select * from users where name ='".$u."' and email='".$em."'") or die("Error: ".mysqli_error($con));
$row = mysqli_fetch_array($result)  or die('Error, query failed5');
$temp=$row['level'];
$result1=mysqli_query($con,"select * from answers where ques ='".$temp."' ") or die("Error: ".mysqli_error($con));
$row1 = mysqli_fetch_array($result1)  or die('Error, query failed6');
    //echo "entered there!!";
    if (strtolower($q)==strtolower($row1['ans']))
    {
         echo "pink";
        //echo "entered there in!!";
        $result3=mysqli_query($con,"UPDATE users SET level=level+1 WHERE name = '".$u."' and email='".$em."'");
         if (!$result3) {
         die('Invalid query: ' . mysqli_error($con));
        }
        
    }
    ?>