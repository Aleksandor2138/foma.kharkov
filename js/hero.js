var swiper = new Swiper(".slider-card", {
    loop: true,
    // loopedSlider:0,
    effect: "fade",
 
spaceBetween: 30,

        autoplay: {
            delay: 6000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
          
        },
        pagination: {
          el: ".swiper-pagination",
          
        },

});
