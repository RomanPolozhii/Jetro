$(document).ready(function(){
    $('.slider__big').slick({
        asNavFor: '.slider__smoll'
      });
      $('.slider__smoll').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:false,
        asNavFor: '.slider__big',
        focusOnSelect: true,
      });
      $('.works__slider').slick({
        arrows:false,
        slidesToShow:4,
        autoplay:true,
      });
  });