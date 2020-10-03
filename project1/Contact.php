<?php
$name = $_Post['name'];
echo $name;
$visitor_email = $_Post['email'];
echo $visitor_email;
$message = $_Post['comment'];
echo $message;

$email_body  =  "User Name: $name.\n";
$email_body .=  "User Email: $visitor_email.\n";
$email_body .=  "User Message: $message.\n";
echo "running1";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

echo "running2";

// Load Composer's autoloader
require './php/vendor/autoload.php';

echo "running3";

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

try {
    //Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'admin.theroasters.me';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'gjha@theroasters.me';
    $mail->Password   = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->addAddress($visitor_email, $name);


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Enquiry for jueves design from' . $name;
    $mail->Body    = $email_body;

    $mail->send();
    echo 'Message has been sent';


    //header("location: index.html");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
