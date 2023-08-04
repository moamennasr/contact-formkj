<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  $name = $data['name'];
  $email = $data['email'];
  $message = $data['message'];

  $to = 'recipient@example.com'; // Replace with your email address
  $subject = 'New Contact Form Submission';
  $headers = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n" .
             'Content-Type: text/html; charset=UTF-8' . "\r\n";

  $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";

  if (mail($to, $subject, $email_body, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
} else {
  http_response_code(405);
}
?>
