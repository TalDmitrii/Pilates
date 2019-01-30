'use strict';

(function useNavigation () {
  var mainNav = document.querySelector('.main-navigation');
  var navToggle = document.querySelector('.main-navigation__toggle');

  mainNav.classList.remove('main-navigation--nojs');

  if (mainNav.classList.contains('main-navigation--opened')) {
    mainNav.classList.remove('main-navigation--opened');
    mainNav.classList.add('main-navigation--closed');
  }

  navToggle.addEventListener('click', function(){
    if (mainNav.classList.contains('main-navigation--closed')) {
      mainNav.classList.remove('main-navigation--closed');
      mainNav.classList.add('main-navigation--opened');
    } else {
      mainNav.classList.add('main-navigation--closed');
      mainNav.classList.remove('main-navigation--opened');
    }
  });
})();