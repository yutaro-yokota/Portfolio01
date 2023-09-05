<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = "{$name}からのお知らせ";
$message = $_POST['message'];
$mailheader = "From: {$name} <{$email}>\r\n";
$recipient = "yokoyuu530@gmail.com";

function production($name, $email, $subject, $message, $mailheader, $recipient) {
    if (mail($recipient, $subject, $message, $mailheader)) {
?>
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mail送信</title>
        <link rel="icon" href="images/favicon.ico">
        <link rel="stylesheet" href="css/mailSend.css">
      </head>
      <body>
        <!-- メール送信成功 -->
        <section class="mail">
          <div class="mail__container">
            <h1 class="mail__title">メール送信に成功しました</h1>
            <p class="mail__text">メール確認次第ご連絡いたしますので、今しばらくお待ちください。</p>
            <a href="main.php" class="mail__top">トップページへ</a>
          </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="js/mail.js"></script>
      </body>
      </html>
      <?php
          } else {
              ?>
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mail送信</title>
        <link rel="icon" href="images/favicon.ico">
        <link rel="stylesheet" href="css/mailSend.css">
      </head>
      <body>
        <!-- メール送信失敗 -->
        <section class="mail">
          <div class="mail__container">
            <h1 class="mail__title">メールの送信に失敗しました。</h1>
            <p class="mail__text">時間をおいてお試しください。</p>
            <a href="contact.php" class="mail__top">コンタクトページへ</a>
          </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="js/mail.js"></script>
      </body>
      </html>
      <?php
    }
};

function test($name, $email, $subject, $message, $mailheader, $recipient) {
    $port = 1025; // MailHogのポート番号
    $smtp = fsockopen('mailhog', $port, $errno, $errstr, 10);

    if ($smtp) {
        fputs($smtp, "EHLO gmail.com\r\n");
        fputs($smtp, "MAIL FROM: <$email>\r\n");
        fputs($smtp, "RCPT TO: <$recipient>\r\n");
        fputs($smtp, "DATA\r\n");
        fputs($smtp, "Subject: $subject\r\n");
        fputs($smtp, "$mailheader\r\n");
        fputs($smtp, "$message\r\n.\r\n");
        fputs($smtp, "QUIT\r\n");

        fclose($smtp);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mail送信</title>
  <link rel="icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/mailSend.css">
</head>
<body>
  <!-- メール送信成功 -->
  <section class="mail">
    <div class="mail__container">
      <h1 class="mail__title">メール送信に成功しました</h1>
      <p class="mail__text">メール確認次第ご連絡いたしますので、今しばらくお待ちください。</p>
      <a href="main.php" class="mail__top">トップページへ</a>
    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="js/mail.js"></script>
</body>
</html>
<?php
    } else {
        ?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mail送信</title>
  <link rel="icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/mailSend.css">
</head>
<body>
  <!-- メール送信失敗 -->
  <section class="mail">
    <div class="mail__container">
      <h1 class="mail__title">メールの送信に失敗しました。</h1>
      <p class="mail__text">時間をおいてお試しください。</p>
      <a href="contact.php" class="mail__top">コンタクトページへ</a>
    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="js/mail.js"></script>
</body>
</html>
<?php
    }
};

production($name, $email, $subject, $message, $mailheader, $recipient);
?>
