'use strict';
const burger = document.querySelector('.burger');
const menu = document.querySelector('aside');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  menu.classList.toggle('hide');
  overlay.classList.toggle('hidden');
});
overlay.addEventListener('click', () => {
  menu.classList.toggle('hide');
  overlay.classList.toggle('hidden');
});
