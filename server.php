<?php 

session_start();

try {
	$bdd = new PDO("mysql:host=localhost;dbname=2048", 'root', 'root');
} catch (PDOException $e) {
	echo $e->getMessage() . "\n";
}

$finalArray = [];

$sql = 'SELECT first_name, last_name, best_score FROM users ORDER BY best_score DESC;';

$req = $bdd->prepare($sql);

$req->execute();

while ($data = $req->fetch()) {
	array_push($finalArray, [
		'first_name' => $data['first_name'],
		'last_name' => $data['last_name'],
		'best_score' => $data['best_score']
	]);
}

$final_json = json_encode($finalArray);

echo $final_json;

?>