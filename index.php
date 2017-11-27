<!DOCTYPE html>
<html>
<head>
	<title>2048</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<!-- 	<nav class="navbar navbar-dark bg-dark">
		<a class="navbar-brand" href="index.html">2048</a>
	    
		<div class="collapse navbar-collapse">
			<span class="navbar-text">Welcome Noufel Gouirhate</span>
			<ul class="navbar-nav">
			    <li class="nav-item">
	        		<a class="nav-link" href="#">Features</a>
	      		</li>
	      		<li class="nav-item">
	        		<a class="nav-link" href="#">Pricing</a>
	      		</li>
	    	</ul>
    	</div>
    	<a class="btn btn-outline-light" id="login" href="login.html">LOGIN</a>
	</nav> -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">2048_</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ranking.html">Ranking</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Account</a>
      </li>
      <a class="btn btn-outline-light" id="login" href="login.html">LOGIN</a>
    </ul>
    <span class="navbar-text center" id="name-user">Welcome Noufel Gouirhate</span>
		
  	</div>
</nav>

	<div class="container">
		<div class="row">
			<div class="above-game col">
				<div class="row">
					<div class="heading col">2048_</div>
					<button id="new-game">New game</button>
				</div>
				<div class="row">
					<p class="text-center">Join the numbers and get to the 2048 tile!</p>
				</div>
				<div class="row">
					<div class="score-container col text-center">
						<p>SCORE : 0</p>
					</div>
					<div class="bestscore-container col text-center">
						<p>BEST SCORE : 0</p>
					</div>
				</div>

			</div>

			<div class="game-container col">
				<div class="grid-container">
					<div class="game-message">
						<p>End of the game</p>
						<button id="try-again">Try Again</button>
						<div class="twitter-sharing">
							<a href="">
        						<img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
    						</a>
						</div>
					</div>
					<div class="grid-row">
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>				
					</div>
					<div class="grid-row">
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>				
					</div>
					<div class="grid-row">
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>				
					</div>
					<div class="grid-row">
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>
						<div class="grid-cell"></div>				
					</div>
				</div>
				<div class="tile-container">
				</div>
			</div>
		</div>


	</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="application.js"></script>
	<script type="text/javascript" src="fb.js"></script>
</body>
</html>