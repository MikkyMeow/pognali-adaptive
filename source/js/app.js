var headerContent = document.querySelector('.header__content');
var headerPanel = document.querySelector('.header__panel');
var headerButton = document.querySelector('.header__button');
var headerLogin = document.querySelector('.header__login');
var header = document.querySelector('.header');

headerContent.classList.add('header__content--closed');
headerPanel.classList.add('header__panel--closed');
headerLogin.classList.add('header__login--closed');

headerButton.addEventListener('click', function() {
  headerContent.classList.toggle('header__content--closed');
  headerPanel.classList.toggle('header__panel--closed');
  headerLogin.classList.toggle('header__login--closed');
  header.classList.toggle('header--open');
});

var addingPopup = document.querySelector('.adding__popup');
var addingButton = document.querySelector('.adding__button');
var addingButtonPopup = document.querySelector('.adding__button--popup');

addingButton.addEventListener('click', function() {
  addingPopup.classList.toggle('adding__popup--show');
});

addingButtonPopup.addEventListener('click', function() {
  addingPopup.classList.toggle('adding__popup--show');
});
