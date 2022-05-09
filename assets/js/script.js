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
// Start swiper 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  // spaceBetween: 15,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
