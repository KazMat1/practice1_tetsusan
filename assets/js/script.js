'use strict';
// Activate swiper.js
const swiper = new Swiper('.swiper', {
  // Optional properties
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// Toggle hamburger menu
const menuBtn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay-sp');
const menuText01 = document.getElementById('menu-text01');
const menuText02 = document.getElementById('menu-text02');
function toggleMenu() {
  menuBtn.classList.toggle('is-active');
  overlay.classList.toggle('is-open');
  menuText01.classList.toggle('is-clicked');
  menuText02.classList.toggle('is-clicked');
}
menuBtn.addEventListener('click', toggleMenu);

// Show up scroll-nav 
const scrollNav = document.getElementById('scroll-nav');
function showUp() {
  let offsetY = window.pageYOffset;
  let isShown = 400 < offsetY;
  if (isShown) {
    scrollNav.classList.add('is-shown');
  } else {
    scrollNav.classList.remove('is-shown');
  }
}
window.addEventListener('scroll', showUp);
window.addEventListener('load', showUp);
// イベント発火時に影響しない要素はfunctionの外に出すべき？
