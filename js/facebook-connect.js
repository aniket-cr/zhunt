/*drunk, fix later */


// $(document).ready(function(){

//   if(window.location.pathname == "/zhunt/" || window.location.pathname == "/zhunt/index.html")
//   {
//     $('body').hide();
//     var bg = "images/home_background.jpg";
//     $('<img/>').load(function(){
//       $('body').css({
//         'background':"url(" + bg + ") no-repeat center center fixed",
//         '-webkit-background-size': 'cover',
//         '-moz-background-size' : 'cover',
//         '-o-background-size' : 'cover',
//         'background-size': 'cover'
//       });
//       $('body').fadeIn('slow');
//     }).
//     attr('src',bg);
//   }
// });

        // This is called with the results from from FB.getLoginStatus().
        var user_id;
        function statusChangeCallback(response) {
          console.log('statusChangeCallback');
    //      console.log(response);
          // The response object is returned with a status field that lets the
          // app know the current login status of the person.
          if (response.status === 'connected') {
//            console.log(window.location.pathname);
            if(window.location.pathname == "/zhunt/" || window.location.pathname == "/zhunt/index.html")
              window.location.href = "/zhunt/zhunt.php";
            // Logged into your app and Facebook.
            user_id = response.authResponse.userID;
            $('#logout-btn').show();
            $('.fb-login-button').hide();
            //Now fetching user-info
            FB.api('/me', function(response) {
              console.log('Successful login for: ' + response.name);
              $('#name').text(response.name);
              $('#status').text('Logged in as ' + response.name);
              $('#dp').attr('src',"https://graph.facebook.com/"+user_id+"/picture?type=large");
                  
                 $.ajax({
                  type :"GET",  //pay attention to this line
                  url: "scripts/checkuser.php",
                  type: "POST",
                  data: { q : response.name,
                      e : response.email
                   }, //parameters are sent like this
                  success: function (html) {
                    if(html == 22)
                    {
                       $(".fadeInUpBig").hide();
                       $(".fadeInDownBig").text("Thanks for playing Z-hunt. Hope you liked it!");
                    }else
                       $('#level').text(html); 
                   // alert(html);  //for testing purpose. Whatever you echo in your php file, will be returned into html
                    //do whatever you want with html here
                }
              });
                /*$.ajax({
                  type :"GET",  //pay attention to this line
                  url: "scripts/checkuser.php",

                  type: "POST",
                  
            contentType: 'text/html',
                  data: { q : response.name }, //parameters are sent like this
                  success: function (html) {
                    $('#level').addClass('success');
                $('#level').hide().append(html).fadeIn();
                   // alert(html);  //for testing purpose. Whatever you echo in your php file, will be returned into html
                    //do whatever you want with html here
                }
              });*/
                
                 $.ajax({
                  type :"GET",  //pay attention to this line
                  url: "scripts/get-ques.php",

                  type: "POST",
                  
                  data: { s : response.name,
                  g:response.email }, //parameters are sent like this
                  success: function (html) {
                    $('#ques').addClass('success');
                $('#ques').hide().append(html).fadeIn();
                   // alert(html);  //for testing purpose. Whatever you echo in your php file, will be returned into html
                    //do whatever you want with html here
                }
              });

                 $.ajax({
                  type :"GET",  //pay attention to this line
                  url: "scripts/getrank.php",
                  type: "POST",
                  data: { r : response.name,
                  f:response.email }, //parameters are sent like this
                  success: function (html) {
                    $('#rank').text(html); 
                   // alert(html);  //for testing purpose. Whatever you echo in your php file, will be returned into html
                    //do whatever you want with html here
                }
              });
                 $('#click').click(function () {
                                document.getElementById("click").innerHTML="Checking...";
				document.getElementById("click").disabled = true;
        $.ajax({
            type: 'POST',
            url: 'scripts/check-answer.php',
            
            data: {
                ans: $('#answer').val(),
                user: response.name,
                email: response.email
            },
            success: function (html) {
                          if(html == "pink")
                          {
                            window.location.reload(true);
                        //   FB.api(
                        // "/me/feed",
                        // "POST",
                        //  {
                        //      "message": "I just crossed level "+$("#level").text()+" on Zeitgeist Treasure Hunt. Play and compete with me",
                        //       "link" : "http://zeitgeist.org.in/zhunt",
                        //       "name" : "Zeitgeist | Treasure Hunt",
                        //       "Caption" : "Explore, Win!",
                        //       "picture"   : "http://www.endeavour2k14.com/events_pics/5.png",
                        //       actions : [{name:"Play Now", link : "http://zeitgeist.org.in/zhunt"}]
                        //  },
                        // function (response) {
                        //   if (response && !response.error) {
                        //     /* handle the result */
                        //     console.log("Posted to facebook");
                        //     window.location.reload(true); 
                        //   }
                        //   else
                        //   {

                        //     console.log(response);
                        //   }
                        // });
                            
                          }
document.getElementById("click").innerHTML="Submit";
				document.getElementById("click").disabled = false;              
//               window.location.reload(true); 
               // $('#message').addClass('success');
                //$('#message').hide().append(html).fadeIn();
            }
        });
        

        
    });

                //you can get email by response.email
              /*put application logic here, storing Name, email, redirection, cabbagge farts etc. 
                blah blah*/
            });
        
       
          } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not our app.
            //if you touch this part, you'll spend the next two days cursing yourself and me
            if(window.location.pathname != "/zhunt/" && window.location.pathname != "/zhunt/index.html")
            {
              window.location.href = "/zhunt";
            };
            $('#logout-btn').hide();
            $('.fb-login-button').show();
            // document.getElementById('status').innerHTML = 'Please log ' +
            //   'into this app.';
          } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            //DON'T TOUCH THIS!
            if(window.location.pathname != "/zhunt/" && window.location.pathname != "/zhunt/index.html")
            {
              window.location.href = "/zhunt";
            }
            $('#logout-btn').hide();
            $('.fb-login-button').show();
            document.getElementById('status').innerHTML = 'Please log ' +
              'into Facebook.';
          }
        }

        // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.
        function checkLoginState() {
          //What did I just tell ya?
          FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
          });
        }

        window.fbAsyncInit = function() {
          //Seriously, don't you fucking understand?
        FB.init({
          appId      : '182115175292303',
          cookie     : true,  // enable cookies to allow the server to access 
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.0' // use version 2.0
        });

        //Aniket, this will be called automatically when someone first comes to the page
        // So if they were logged in before, they'll be logged in automatically
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });

        };

        // Load the SDK asynchronously
        (function(d, s, id) {
          //Not fit for human consumption
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function logout()
        {
          FB.api(
    //         {user-id}/permissions

            "/"+user_id+"/permissions","DELETE",
            function (response) {
              if (response && !response.error) {
                /* handle the result */
                window.location.reload();
              }
            }
          );
        }