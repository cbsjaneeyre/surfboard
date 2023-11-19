const slider = $('.goods__list').bxSlider({
  pager: false,
  controls: false,
});

$(".goods__slider-arrow--left").on("click", function(event) {
  event.preventDefault();
  slider.goToPrevSlide();
});

$(".goods__slider-arrow--right").on("click", function(event) {
  event.preventDefault();
  slider.goToNextSlide();
});