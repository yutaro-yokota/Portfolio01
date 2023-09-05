'use strict';

$(function(){
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    let adjust = -$('header').outerHeight();
    // スクロールの速度（ミリ秒）
    let speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    let href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    let position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $('.text-text__ham').click(function(){

    //　ドロワーメニュー
    $('.drawer').show();
  });

  $('.drawer a').click(function(){

    //　ドロワーメニュー閉じる
    $('.drawer').hide();
  });

  //タブの処理
  $('.tabs__item:nth-child(2), .tabs__item2:nth-child(1)').click(function(){
    $('.purpose__select, .grade__select').toggle();
  });
  
  $('.tabs__pane').hover(
    function() {
      $(this).find('.tabs__image').css({
        'transform': 'scale(1.2)',
        'transition': 'transform 0.3s'
      });
    },
    function() {
      $(this).find('.tabs__image').css({
        'transform': 'scale(1)',
        'transition': 'transform 0.3s'
      });
    }
  );
  

  
  
  $('.footer__item').hover(
    function() {
      $(this).css({
        'transform': 'scale(1.2)',
        'transition': 'transform 0.3s'});
    },
    function() {
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 0.3s'});
    }
  );
  
});