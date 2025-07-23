
var swiperthump = new Swiper(".slider-thump-project", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed:1000,
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: -15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    
  });
var swiper2 = new Swiper(".slider-home-project", {
    loop: true,
    speed: 600,         // có thể chỉnh lại tốc độ cho mượt hơn (600ms là phổ biến)
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: {
        swiper: swiperthump,
    },
    navigation: {
        clickable: true,
        nextEl: ".button-slide-home-3-next",
        prevEl: ".button-slide-home-3-prev",
    },

});
