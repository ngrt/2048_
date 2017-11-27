<?php 

session_start();

try {
	$bdd = new PDO("mysql:host=localhost;dbname=2048", 'root', 'root');
} catch (PDOException $e) {
	echo $e->getMessage() . "\n";
}

if (isset($_POST))
{
	$sql = "SELECT COUNT(*) AS user FROM users WHERE fb_id = ?";
	$req = $bdd->prepare($sql);
	$req->execute(array($_POST['id']));
	$data = $req->fetch();

	$_SESSION["fb_id"] = $_POST["id"];
	
	if ($data['user'] == 0)
	{
		$sql = "INSERT INTO users (fb_id, first_name, last_name, FCFA, email, best_score) VALUES (:fb_id, :first_name, :last_name, :FCFA, :email, :best_score)";

		$req = $bdd->prepare($sql);

		$req->execute(array(
			'fb_id' => $_POST["id"], 
			'first_name' => $_POST["first_name"], 
			'last_name' => $_POST["last_name"], 
			'FCFA' => 10, 
			'email' => $_POST["email"], 
			'best_score' => 0
		));

	}

}
?>