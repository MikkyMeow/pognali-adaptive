var navContent = document.querySelector('.nav__content');
var navPanel = document.querySelector('.nav__panel');
var navButton = document.querySelector('.nav__button');
var navLogin = document.querySelector('.nav__login');
var nav = document.querySelector('.nav');

navContent.classList.add('nav__content--closed');
navPanel.classList.add('nav__panel--closed');
navLogin.classList.add('nav__login--closed');

navButton.addEventListener('click', function() {
  navContent.classList.toggle('nav__content--closed');
  navPanel.classList.toggle('nav__panel--closed');
  navLogin.classList.toggle('nav__login--closed');
  nav.classList.toggle('nav--open');
});
