<?php
//echo "here!!!";
    include('../config.php');
$q=$_REQUEST["r"];
$f=$_REQUEST["f"];
//echo $q;

  $result1 = mysqli_query($con,"SELECT * FROM users");
    $rank=0;
   // echo $rank;
    while($row1 = mysqli_fetch_array($result1)) 
    {
        $rank=$rank+1;
     //   echo $rank;
        if ($row1['name']==$q and $row1['email']==$f)
        break;
    }
echo $rank;

?>