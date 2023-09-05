'use strict';
const URL = location.href;
const USE_URL = URL.indexOf("main.php");
const LOADING = "NOW LODING...";

const LOAD_CONTAINER = document.querySelector('.load__container');
const LOAD = document.querySelector('.load');
if(USE_URL != -1) {
  const SPLIT_TEXT = LOADING.split("");
  SPLIT_TEXT.forEach(element => {
    let span = document.createElement('span');
    console.log(span);
    span.textContent = element;
    span.classList.add('load__text')
    LOAD_CONTAINER.appendChild(span);
  });
  
  gsap.from(".load__text",{
    opacity: 0,
    duration: 1,
    repeat: -1,
    stagger: .04
  });
}

window.onload = function() {
    LOAD.classList.add('loaded');
};