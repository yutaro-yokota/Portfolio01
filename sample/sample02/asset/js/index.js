let swiper;
$(function() {
  if (window.matchMedia("(max-width: 750px)").matches) {
    //画面横幅が750px以下のときの処理
    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      console.log(scroll);
      if (scroll > 0) {
        $('.header__appearance').addClass('appearance');
      } else {
        $('.header__appearance').removeClass('appearance');
      }
    });

    swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true, //繰り返しをする
      slidesPerView: 1.5, //スライダーのコンテナ上に1枚同時に表示
      spaceBetween: 10, //スライド間の距離を10pxに
      speed: 600, //スライドの推移時間を600msに
      centeredSlides:true,
      slidesPerGroup: 1,
    });
  

  } else {
    //画面横幅が751px以上のときの処理
    swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true, //繰り返しをする
      slidesPerView: 4, //スライダーのコンテナ上に1枚同時に表示
      spaceBetween: 10, //スライド間の距離を10pxに
      speed: 600, //スライドの推移時間を600msに
      centeredSlides:undefined,
      slidesPerGroup: 4,
    });
  }; 
});

