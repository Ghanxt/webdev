<?php
$name = $_Post['name'];
	$visitor_email = $_Post['email'];
	$message = $_Post['message'];

$email_body = "User Name: $name.\n"	
		"User Email: $visitor_email.\n"
				"User Message: $message.\n";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                    
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'admin.theroasters.me';                   
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'gjha@theroasters.me';                   
    $mail->Password   = 'ghanu@123';                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;        
    $mail->Port       = 465;                                   

$mail->setFrom('kingghanshyam38@gmail.com', 'Ghanshyam jha');


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Enquiry for jueves design from' . $name;
    $mail->Body    = $email_body;


 header("location: message.html");

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>