'use strict';

(function slider() {
  var sliderContainer = document.querySelector('.feedback');
  var slider = document.querySelector('.feedback__list');
  var sliderItems = slider.querySelectorAll('.feedback__item');
  var sliderControls = sliderContainer.querySelectorAll('.slider-buttons__button');
  var sliderControlLeft = sliderContainer.querySelector('.slider-buttons__button--prev');
  var sliderControlRight = sliderContainer.querySelector('.slider-buttons__button--next');
  var sliderWidth = parseFloat(getComputedStyle(slider).width);
  var itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width) + parseFloat(getComputedStyle(sliderItems[0]).marginTop);
  var activeItemPosition = 0;
  var transform = 0;
  var step = itemWidth / sliderWidth * 100;

  var position = {
    getMin: 0,
    getMax: sliderItems.length - 1
  }

  function transformSlider(direction) {
    if (direction === 'right') {
      if ((activeItemPosition + itemWidth / sliderWidth - 1) >= position.getMax) {
        return
      }

      if (!sliderControlLeft.classList.contains('slider-buttons__button--active')) {
        sliderControlLeft.classList.add('slider-buttons__button--active');
      }
      
      if (sliderControlRight.classList.contains('slider-buttons__button--active') && ((activeItemPosition + itemWidth / sliderWidth) >= position.getMax)) {
        sliderControlRight.classList.remove('slider-buttons__button--active');
      }

      activeItemPosition++;
      transform -= step;
    }

    if (direction === 'left') {
      if (activeItemPosition <= position.getMin) {
        return
      }

      if (!sliderControlRight.classList.contains('slider-buttons__button--active')) {
        sliderControlRight.classList.add('slider-buttons__button--active');
      }

      if (sliderControlLeft.classList.contains('slider-buttons__button--active') && (activeItemPosition - 1 <= position.getMin)) {
        sliderControlLeft.classList.remove('slider-buttons__button--active');
      }

      activeItemPosition--;
      transform += step;
    }

    slider.style.transform = 'translateX(' + transform + '%)';
  }

  function onButtonClick() {
    var direction = this.classList.contains('slider-buttons__button--next') ? 'right' : 'left';
    transformSlider(direction);
  }

  sliderControls.forEach(function (item) {
    item.addEventListener('click', onButtonClick);
  });
})();