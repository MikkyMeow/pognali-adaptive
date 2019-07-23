var navContent = document.querySelector('.nav__content');
var navPanel = document.querySelector('.nav__panel');
var navButton = document.querySelector('.nav__button');

navContent.classList.add('nav__content--closed');
navPanel.classList.add('nav__panel--closed');

navButton.addEventListener('click', function() {
  navContent.classList.toggle('nav__content--closed');
  navPanel.classList.toggle('nav__panel--closed');
});
