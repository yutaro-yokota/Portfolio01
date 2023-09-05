'use strict';

function hum() {
  const HAM = document.querySelector('.header__list-sp');
  const LIST = document.querySelector('.header__list');
  const span1 = document.querySelectorAll('.header__list-sp > span:nth-of-type(1)');
  const span2 = document.querySelectorAll('.header__list-sp > span:nth-of-type(2)');
  const span3 = document.querySelectorAll('.header__list-sp > span:nth-of-type(3)');
  HAM.addEventListener('click', () => {
    let target = HAM.classList.contains('open');
      if(!target) {
        HAM.classList.add('open');
        gsap.to(span1, {
          y: '2vw',
          rotate: -45,
          duration: 0.3
        });
   
        gsap.to(span2, {
          scale: 0,
          duration: 0.3
        });
  
        gsap.to(span3, {
          y: '-3vw',
          rotate: 45,
          duration: 0.3
        });

        gsap.to(LIST, {
          visibility: 'inherit',
          duration: 0.3
        });
  
      } else {
        HAM.classList.remove('open');
        gsap.to(span1, {
          y: 0,
          rotate: 0,
          duration: 0.3
        });
  
        gsap.to(span2, {
          scale: 1,
          duration: 0.3
        });
  
        gsap.to(span3, {
          y: 0,
          rotate: 0,
          duration: 0.3
        });

        gsap.to(LIST, {
          visibility: 'hidden',
          duration: 0.3
        });
      }
    });
}
hum();