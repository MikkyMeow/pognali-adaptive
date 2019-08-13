var header = document.querySelector('.header');
var headerButton = document.querySelector('.header__button');

header.classList.remove('header--open');
headerButton.classList.remove('header__button--hidden');

headerButton.onclick = function() {
  header.classList.toggle('header--open');
}

window.onresize = function () {
  if (window.innerWidth >= 1440) {
    header.classList.remove('header--open');
  }
}

var addingPopup = document.querySelector('.adding__popup');
var addingButton = document.querySelector('.adding__button');
var addingButtonPopup = document.querySelector('.adding__button--popup');

addingButton.addEventListener('click', function() {
  addingPopup.classList.toggle('adding__popup--show');
});

addingButtonPopup.addEventListener('click', function() {
  addingPopup.classList.toggle('adding__popup--show');
});
