<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	
	$url = "https://dorsavicodechallenge.azurewebsites.net/Melbourne";

// Send using curl
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, $url); // URL to post
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 ); // return into a variable
	
	
	
	$result = curl_exec( $ch ); // runs the post
	
	echo $result;

//perform tasks on $result
	curl_close($ch);
?>