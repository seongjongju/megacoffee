var swiper = new Swiper(".swiper_content", {
  slidesPerView: 2.1,
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function() {
      if (swiper.realIndex === 6) {
        swiper.navigation.nextEl.classList.add('swiper-button-disabled');
      } else {
        swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
      }
    }
  }
});