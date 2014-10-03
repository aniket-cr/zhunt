<?php
    include('config.php');

    $result=mysqli_query($con,"ALTER TABLE  `users` ORDER BY  `level` DESC") or die("Error: ".mysqli_error($con));

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
    <link href="css/style.css" rel="stylesheet">
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

<body id="about">
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
                    <!--<li><a href="contact.html">Developers</a></li>-->
                    <li><a id="logout-btn" href="javascript:logout();">Logout</a></li>
                    
            </ul>
            <ul>
                
                <li><a href="http://www.facebook.com/zeitgeist.iitrpr" class="fa fa-facebook">Facebook</a></li>
                
            </ul>
        </nav><!-- /Nav Menu -->
        <!-- Switcher Color -->
        <!--<div id="switcher" class="switcher">
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
        <div class="row animated fadeInRightBig">
            <div class="col-md-4 col-md-offset-1 col-sm-12 text-center" style="margin-right: 0px;width: 25%;margin-left: 23%;">
                 <img src = "" id = "dp" class="img-circle">
               <!-- <img src="images/about.jpg" class="img-circle">-->
            </div>
            <div class="col-md-6 col-sm-12"style="padding-top: 40px;">
                             
                <h2>Your Level : <span id="level"></span></h2>
                <h2>Your Rank : <span id="rank"></span></h2>
                </div>
        </div>
        <!-- Skills -->
        <div id="chart" class="row animated fadeInLeftBig" style="padding-top: 50px;">
            <h1 class="text-center">Leaderboard</h1>
                <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Rank</th>
    </tr>
  </thead>
  <tbody>
   
    <?php
    $sno=1;
    $result5 = mysqli_query($con,"SELECT * FROM users");
    while($row5 = mysqli_fetch_array($result5)) 
    {

    
    echo("<tr>");
      echo("<td><strong>".$row5['name']."</strong></td>");
      echo("<td>".$row5['level']."</td>");
      echo("<td>".$sno."</td>");
    echo("</tr>");
    $sno+=1;
    }
    ?>
  </tbody>
</table>
        </div><!-- /Skills -->
       
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
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55273260-1', 'auto');
  ga('send', 'pageview');

</script>
</body>

</html>
