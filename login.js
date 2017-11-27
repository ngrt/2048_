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
		// postInfo();
		window.location.replace("index.php");
		console.log("connected");
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

function login()
{
	FB.login(function(response){
		if (response.status == 'connected'){
			console.log("Connected");
			postInfo();
		} else if (response.status === 'not_authorized'){
			console.log("Not authorized");
		} else {
			console.log("Not connected");
		}
	}, {scope: 'public_profile, email'});
}

function postInfo()
{
	FB.api('/me?fields=first_name,last_name,email', function (response) {
		var user = {
			first_name : response.first_name,
			last_name : response.last_name,
			email : response.email,
			id : response.id
		};

		$.post('login.php', user)
		.done(function (data) {
			window.location.replace("index.php");
		})
		.fail(function(){

		})
		.always(function (){

		});
	});
}