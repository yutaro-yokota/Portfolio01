$(function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    //画面横幅が768px以下のときの処理
  } else {
    //画面横幅が769px以上のときの処理
    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      console.log(scroll);
      if (scroll > 800) {
        $('.header__appearance').addClass('appearance');
      } else {
        $('.header__appearance').removeClass('appearance');
      }
    });
  };
});

