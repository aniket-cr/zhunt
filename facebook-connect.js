/*drunk, fix later */

        // This is called with the results from from FB.getLoginStatus().
        var user_id;
        function statusChangeCallback(response) {
          console.log('statusChangeCallback');
    //      console.log(response);
          // The response object is returned with a status field that lets the
          // app know the current login status of the person.
          if (response.status === 'connected') {
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
                    $('#level').text(html); 
                   // alert(html);  //for testing purpose. Whatever you echo in your php file, will be returned into html
                    //do whatever you want with html here
                }
              });
                /*$.ajax({
                  type :"GET",  //pay attention to this line
                  url: "checkuser.php",

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

        $.ajax({
            type: 'POST',
            url: 'scripts/check-answer.php',
            
            data: {
                ans: $('#answer').val(),
                user: response.name,
                email: response.email
            },
            success: function (html) {
              
               window.location.reload(true); 
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
            if (window.location.href!="http://zeitgeist.org.in/konefix3/index.html")
            {
              var url = "http://zeitgeist.org.in/konefix3/index.html";
              $(location).attr('href',url);
            }
            $('#logout-btn').hide();
            $('.fb-login-button').show();
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
          } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            //DON'T TOUCH THIS!
            if (window.location.href!="http://zeitgeist.org.in/konefix3/index.html")
            {
              var url = "http://zeitgeist.org.in/konefix3/index.html";
              $(location).attr('href',url);
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
          appId      : '754987941210480',
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
