<?php
include('_parts/_header.php');
include('_parts/_load.php');
?>

    <!-- contactページ -->
    <section class="contact">
      <div class="contact__container">
      <div class="contact__text-group">
        <h1>Contact</h1>
        <p class="contact__text">
        制作のご依頼やご相談などがありましたら、どうぞお気軽にお問い合わせくださいませ。
        お手数ですが、以下のフォームにできる限りの情報をご記入いただけますと幸いです。必須項目については、お手数ですが必ずご記入いただけますようお願い申し上げます。。
        </p>
        <form action="mail.php" method="post">
        <dl>
            <dt><label for="name">名前：</label><span class="required">必須</span></dt>
            <dd><input type="text" id="name" name="name" required></dd>
            
            <dt><label for="email">メールアドレス：</label><span class="required">必須</span></dt>
            <dd><input type="email" id="email" name="email" required></dd>
            
            <dt><label for="message">メッセージ：</label><span class="required">必須</span></dt>
            <dd><textarea id="message" name="message" required></textarea></dd>
        </dl>
        <button type="submit">送信</button>
    </form>
    </section>

<?php

include('_parts/_footer.php');