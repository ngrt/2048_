<?php

session_start();

try {
	$bdd = new PDO("mysql:host=localhost;dbname=2048", 'root', 'root');
} catch (PDOException $e) {
	echo $e->getMessage() . "\n";
}

if (isset($_SESSION["fb_id"]))
{
	$sql = "SELECT * FROM users WHERE fb_id = ?";
	$req = $bdd->prepare($sql);
	$req->execute(array($_SESSION["fb_id"]));
	$data = $req->fetch();

	$final = [
		"first_name" => $data["first_name"],
		"last_name" => $data["last_name"],
		"FCFA" => $data["FCFA"],
		"best_score" => $data["best_score"],
		"email" => $data["email"],
		"id" => $data["id"],
		"fb_id" => $data["fb_id"]
	];

	$final_json = json_encode($final);

	echo $final_json;
}


if (isset($_POST["best_score"]))
{
	$sql = "UPDATE users SET best_score = :best_score WHERE fb_id = :fb_id";

	$req = $bdd->prepare($sql);

	$req->execute(array(
		'best_score' => $_POST["best_score"],
		'fb_id' => $_SESSION["fb_id"]		
	));
}

?>