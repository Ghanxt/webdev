<?php
	$name = $_Post[''];
	$visitor_email = $_Post['email'];
	$message = $_Post['message'];

$email_from = 'ghanxt@gmail.com'
$email_subject = "New Form Submission";
	
$email_body = "User Name: $name.\n"	
		"User Email: $visitor_email.\n"
				"User Message: $message.\n";

$to = "kingghanshyam5@gmail.com";
$headers = "From: $email_from\r\n";
$headers = "Reply-To:$visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");
?>