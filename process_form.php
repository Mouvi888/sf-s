<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "stalkermitya5454@gmail.com"; // Замените на вашу электронную почту
  $subject = "Новая форма обратной связи";
  $body = "Имя: $name\nEmail: $email\n\n$message";
  
  if(mail($to, $subject, $body)) {
    echo "Сообщение успешно отправлено.";
  } else {
    echo "Ошибка отправки сообщения.";
  }
}
?>
