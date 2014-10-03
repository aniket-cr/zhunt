<?php
    include('../config.php');
	$s=$_REQUEST["s"];
	$g=$_REQUEST["g"];
	$result=mysqli_query($con,"select * from users where name ='".$s."' and email ='".$g."' ") or die("Error: ".mysqli_error($con));
	$row = mysqli_fetch_array($result)  or die('Error, query failed7');
	$result1=mysqli_query($con,"select * from answers where ques ='".$row['level']."'  ") or die("Error: ".mysqli_error($con));
	$row1 = mysqli_fetch_array($result1)  or die('Error, query failed88');
	$count=0;
	if ($row1['url1']!=null)
		$count+=1;
	if ($row1['url2']!=null)
		$count+=1;
	if ($row1['url3']!=null)
		$count+=1;
	if ($row1['url4']!=null)
		$count+=1;
		$width="";
	if ($count==1)
		$width="560px;margin-left:280px;";
	if ($count==2)
		$width="460px;margin-left:70px;";
	if ($count==3)
		$width="350px;margin-left:25px;";
	if ($count==4)
		$width="280px;margin-left:5px;";

	if ($count>2)
	{?>
		<img style="height:400px;width:<?php echo $width;?>opacity:1;" class="row animated fadeInLeftBig" src="<?php echo $row1['url3'];?>">
	<?php }
	if ($count>0)
	{?>
		<img style="height:400px;width:<?php echo $width;?>opacity:1;" class="row animated fadeInDownBig" src="<?php echo $row1['url1'];?>">
	<?php }
	if ($count>1)
	{?>
		<img style="height:400px;width:<?php echo $width;?>opacity:1;" class="row animated fadeInUpBig" src="<?php echo $row1['url2'];?>">
	<?php }
	if ($count>3)
	{?>
		<img style="height:400px;width:<?php echo $width;?>opacity:1;" class="row animated fadeInRightBig" src="<?php echo $row1['url4'];?>">
	<?php }

?>
