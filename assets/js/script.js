'use strict';
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
