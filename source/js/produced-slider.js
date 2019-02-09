'use strict';

(function slider() {
  var sliderContainer = document.querySelector('.produced-works');
  var slider = document.querySelector('.produced-works__list');
  var sliderItems = slider.querySelectorAll('.produced-works__item');
  
  var sliderControls = sliderContainer.querySelectorAll('.slider-buttons__button');
  var sliderControlLeft = sliderContainer.querySelector('.slider-buttons__button--prev');
  var sliderControlRight = sliderContainer.querySelector('.slider-buttons__button--next');

  var position = {
    getMin: 0,
    getMax: sliderItems.length - 1
  }

  sliderItems.forEach(function(item, index) {
    item.dataset.id = index;
  });

  function transformSlider(direction) {
    var sliderActiveItem = slider.querySelector('.produced-works__item--active');

    if (direction === 'right') {
      if (sliderActiveItem.nextElementSibling === null) {
        return
      }

      if (!sliderControlLeft.classList.contains('slider-buttons__button--active')) {
        sliderControlLeft.classList.add('slider-buttons__button--active');
      }
      
      
      if (sliderControlRight.classList.contains('slider-buttons__button--active') && (sliderActiveItem.dataset.id >= position.getMax - 1)) {
        sliderControlRight.classList.remove('slider-buttons__button--active');
      }

      sliderActiveItem.classList.remove('produced-works__item--active');
      sliderActiveItem.nextElementSibling.classList.add('produced-works__item--active');

      sliderActiveItem.style.transform = 'translateX(-3000px)';
    }

    if (direction === 'left') {
      if (sliderActiveItem.previousElementSibling === null) {
        return
      }

      if (!sliderControlRight.classList.contains('slider-buttons__button--active')) {
        sliderControlRight.classList.add('slider-buttons__button--active');
      }

      if (sliderControlLeft.classList.contains('slider-buttons__button--active') && (sliderActiveItem.dataset.id - 1 <= position.getMin)) {
        sliderControlLeft.classList.remove('slider-buttons__button--active');
      }

      sliderActiveItem.classList.remove('produced-works__item--active');
      sliderActiveItem.previousElementSibling.classList.add('produced-works__item--active');

      sliderActiveItem.previousElementSibling.style.transform = '';
    }

    
  }

  function onButtonClick() {
    var direction = this.classList.contains('slider-buttons__button--next') ? 'right' : 'left';
    transformSlider(direction);
  }

  sliderControls.forEach(function (item) {
    item.addEventListener('click', onButtonClick);
  });
})();