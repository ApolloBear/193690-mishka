var navMain = document.querySelector('.main-nav__list');
var hidden = document.querySelectorAll('.hidden');
var navToggle = document.querySelector('.main-nav__toggle');
var userList = document.querySelector('.user-list');
var siteList = document.querySelector('.site-list');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
    userList.classList.remove('hidden');
    siteList.classList.remove('hidden');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    userList.classList.add('hidden');
    siteList.classList.add('hidden');
  }
});

// var navMain = document.querySelector('.main-nav__list');
// var hidden = document.querySelectorAll('.hidden');
// var navToggle = document.querySelector('.main-nav__toggle');
// var userList = document.querySelector('.user-list');
// var siteList = document.querySelector('.site-list');
//
// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav__toggle--closed')) {
//     navMain.classList.remove('main-nav__toggle--closed');
//     navMain.classList.add('main-nav__toggle--opened');
//     userList.classList.remove('hidden');
//     siteList.classList.remove('hidden');
//   } else {
//     navMain.classList.add('main-nav__toggle--closed');
//     navMain.classList.remove('main-nav__toggle--opened');
//     userList.classList.add('hidden');
//     siteList.classList.add('hidden');
//   }
// });
// <nav class="main-nav main-nav--closed">
//   <button class="main-nav__toggle main-nav__toggle--closed" type="button"><span class="visually-hidden">Открыть меню</span></button>
