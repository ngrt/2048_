window.fbAsyncInit = function() {
	FB.init({
	  appId            : '534765913548652',
	  autoLogAppEvents : true,
	  xfbml            : true,
	  version          : 'v2.11'
	});

	FB.getLoginStatus(function(response){
		console.log(response);
		if (response.status === 'connected'){
			$("#login").attr("href", "#");
			$("#login").attr("onclick", "logout();");
			$("#login").html("LOGOUT");
			console.log("Connected");
		} else if (response.status === 'not_authorized'){
			console.log("Not authorized");
		} else {
			console.log("Not connected");
		}
	});
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "https://connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function logout()
{
	FB.logout(function(response) {
  			$("#login").attr("href", "login.html");
			$("#login").attr("onclick", "login();");
			$("#login").html("LOGIN");
	});
}
