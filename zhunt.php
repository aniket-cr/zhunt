<?php
    include('config.php');
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    
    <title>Zeitgeist | Treasure Hunt</title>    
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Stylesheet -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <style>
        body  {
        padding-top: 40px;
        }
    </style>
    
    <!-- Favicon and Touch Icons -->
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png">

    <script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>

<body id="service">
     
     <!--<script type="text/javascript">
    document.getElementById('name').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
    </script>-->
    <?php
   /* $user="<span id='name'></span>";
if(isset($_GET["ans"]))
{
$result=mysqli_query($con,"select * from users where name ='".$_GET['username']."' ") or die("Error: ".mysqli_error($con));
$row = mysqli_fetch_array($result)  or die('Error, query failed3');
$temp=$row['level'];
$result1=mysqli_query($con,"select * from answers where ques ='".$temp."' ") or die("Error: ".mysqli_error($con));
$row1 = mysqli_fetch_array($result1)  or die('Error, query failed3');
    //echo "entered there!!";
    if ($_GET["ans"]==$row1['ans'])
    {
        //echo "entered there in!!";
        $result3=mysqli_query($con,"UPDATE users SET level=level+1 WHERE name = '".$_GET['username']."'");
         if (!$result3) {
         die('Invalid query: ' . mysqli_error($con));
        }
        
    }
}
else
{
    $result=mysqli_query($con,"select * from users where name ='".$user."' ") or die("Error: ".mysqli_error($con));
$row = mysqli_fetch_array($result)  or die('Error, query failed3');
}
    */?>
    <div class="container">
        <!-- Nav Menu -->
        <nav id="k-menu" class="k-menu">
            <a href="#" class="k-menu-trigger"><span>Menu</span></a>
            <ul>
                    <!--<li><a href="index.html">Home</a></li>-->
                    <li><a href="zhunt.php">Hunt</a></li>
                    <li><a href="leaderboard.php">Leaderboard</a></li>
                    <li><a href="https://apps.facebook.com/forumforpages/page/631168673648008" target = "_blank">Forum</a></li>
                    <li><a href="rules.html">Rules</a></li>
                   <!-- <li><a href="contact.html">Developers</a></li>-->
                    <li><a id="logout-btn" href="javascript:logout();">Logout</a></li>
                    </ul>
            <ul>
                <li><a href="http://www.facebook.com/zeitgeist.iitrpr" class="fa fa-facebook">Facebook</a></li>
                
            </ul>
        </nav><!-- /Nav Menu -->
        <!-- Switcher Color -->
       <!-- <div id="switcher" class="switcher">
            <div class="switcher-content">
                <h2>Choose<br> color style</h2>
                <ul class="color color-thumbs">
                  <li class="color-1"></li>
                  <li class="color-2"></li>
                  <li class="color-3"></li>
                  <li class="color-4"></li>
                  <li class="color-5"></li>
                </ul>
            </div>
            <a href="" class="switcher-btn"><i class="fa fa-cogs fa-3x"></i></a>
        </div>--><!-- /Switcher Color -->
        <div class="row text-center animated fadeInDownBig" style="margin-bottom: 10px;">
            <div class="col-md-6 col-md-offset-3">
               
                <h1 class="row animated fadeIn">Level-<span id="level"></span></h1>
                
            </div>
        </div>
        <div class="row animated fadeInUpBig">
                <!-- question1 : zeitgeist14 --> 
                <div style="height:500px;width:1150px;background-color: rgba(0, 0, 0, 0.2);">
                <div style="height:430px;">
                <span id="ques">
                    
                </span><br><br>
                </div>
                <div>
                 <form id = "answer-form">
                <input type="text" id="answer" name="answer" style="height:40px;width:200px;color:#1abc9c;margin-left: 400px;margin-top:20px;"/> 
                <button id="click" style="height:40px;width:100px;background-color:#1abc9c;color:white;margin-left: 20px;border-color: #1abc9c;"><strong>SUBMIT</strong></button>
                </form>
                </div>
                </div>
                 <br>                 
                
                
				<?php //include 'ques/q'.$row['level'].'.php';?>
		</div>
        <div class="row animated fadeInUpBig">
            
        </div>
        <footer class="animated bounceIn">
            </footer>
    </div><!-- /.container -->

    <!-- JavaScript -->
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/borderMenu.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/jquery.easypiechart.min.js"></script>
    <script src="js/custom.js"></script>
     <script type="text/javascript" src = "js/facebook-connect.js"></script>
    <script>
      $("#answer-form").click(function(event){
         event.preventDefault();
      })   
    </script>
    <!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55273260-1', 'auto');
  ga('send', 'pageview');

</script>
</body>

</html>