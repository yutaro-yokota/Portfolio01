$(document).ready(function() {
  // ボタンをクリックしたらページトップにスクロールする
  $('.return').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500); // スクロール速度を指定する場合は、ここ*数値を変更する
    return false;
  });
});
