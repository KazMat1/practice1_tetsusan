'use strict';
// Start hamburger menu
const menuBtn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay-sp');
const menuText01 = document.getElementById('menu-text01');
const menuText02 = document.getElementById('menu-text02');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  overlay.classList.toggle('is-open');
  menuText01.classList.toggle('is-clicked');
  menuText02.classList.toggle('is-clicked');
})
// Start scroll nav
const scrollNav = document.getElementById('scroll-nav');
window.addEventListener('scroll', () => {
  let offsetY = window.pageYOffset;
  let isShown = 400 < offsetY;
  if (isShown) {
    scrollNav.hidden = false;
  } else {
    scrollNav.hidden = true;
  }
});
// Start swiper 
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
