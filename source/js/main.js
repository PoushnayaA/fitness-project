import {iosVhFix} from './utils/ios-vh-fix';
import {initScroll} from './extra-options/scroll';
import {initActiveCard} from './extra-options/active-card';
import {initYoutubeVideo} from './modules/video/init-video';
import {initTabs} from './modules/tabs/init-tabs';
import {initSliderJury} from './modules/sliders/init-slider-jury';
import {initAccordions} from './modules/accordion/init-accordion';
import {initSliderReviews} from './modules/sliders/init-slider-reviews';
import {Form} from './modules/form-validate/form';

// import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    initScroll();
    initYoutubeVideo();
    initTabs();
    initActiveCard();
    initSliderJury();
    initAccordions();
    initSliderReviews();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
