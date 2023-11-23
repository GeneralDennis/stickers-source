import './index.sass';
import Swiper, { Navigation, EffectFade } from 'swiper/core';
import 'swiper/scss';

import 'swiper/scss/navigation';

export default () => {

  Swiper.use([Navigation, EffectFade])

  const slider = new Swiper('.stickers__slider', {
    speed: 1000,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.stickers__slider-button--next',
      prevEl: '.stickers__slider-button--prev',
    },
    on: {
      init: function(){
        const $gridItem = $('.stickers__grid-item');
        $gridItem.on('click', function(){
          slider.slideTo($(this).data('index'));
          $('html, body').animate({
            scrollTop: $(".stickers__slider").offset().top
        }, 300);
        })
      },
      slideChange: function(){
        $('.stickers__content-item').removeClass('active');
        $(`.stickers__content-item[data-index="${+slider.realIndex}"]`).addClass('active');
        console.log('i',slider.realIndex, $(`.stickers__content-item[data-index="${+slider.realIndex}"]`));
        // slider2.slideTo(slider.realIndex);
      }
    }
  })
}


