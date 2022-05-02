console.clear();

function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper-container", {
    slidesPerView: 1,
    loop:true,
    effect: "fade",
     autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider-box-1 .slider-button-next",
      prevEl: ".slider-box-1 .slider-button-prev",
    },
  });
}

SliderBox1__init();


$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ( scrollTop == 0 ) {
    $('.top-bar').removeClass('hover');
  }
  else {
    $('.top-bar').addClass('hover');
  }
});

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('shown');
  }
  else {
    $('.top-bar-2').removeClass('shown');
  }
  
  if ($(window).scrollTop() > 2) {
    $('.top-bar-2').addClass('under-line');
  }
  else {
    $('.top-bar-2').removeClass('under-line');
  }
})