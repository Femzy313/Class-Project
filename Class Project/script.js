'use strict';

const navOpen = document.querySelector('.nav-bar');
const iconOpen = document.querySelector('.menu');
const iconClose = document.querySelector('.close');

iconOpen.addEventListener('click', function () {
  navOpen.classList.add('open');
});
iconClose.addEventListener('click', function () {
  navOpen.classList.remove('open');
});
