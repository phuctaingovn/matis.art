
var swiper =  new Swiper(".slider-home", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
});


var swiper =  new Swiper(".slider-home-2", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fadeInRight",
});

var swiper =  new Swiper(".partner", {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 0, 
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        reverseDirection: true,
    },
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});
var swiper =  new Swiper(".partner-2", {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 0, 
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        reverseDirection: false,
    },
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".sl-roadmap", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 55,
    initialSlide: 2,
    centeredSlides: true,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 5.4,
            spaceBetween: 55,
        },
    },
});


var swiper =  new Swiper(".team-details", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-team-detail-next",
        prevEl: ".button-team-detail-prev",
    },
});

var swiper =  new Swiper(".team-slider", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-team-next",
        prevEl: ".button-team-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
var swiper_thump = new Swiper(".slideThumbMain", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        991: {
            slidesPerView: 'auto'
        },
        1100: {
            slidesPerView:  "auto"
        },
    },
});
var swiper2 = new Swiper(".slideThumb", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_thump,
    },
});

var sl_roadmap3 = new Swiper(".sl-roadmap3", {
        spaceBetween: 30,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,       
        breakpoints: {
            
            991: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
});
var sl_roadmap3_thumb = new Swiper(".sl-roadmap3-thumb", {
        spaceBetween: 0,
        effect: "fadeInRight",
        speed: 2500,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
        thumbs: {
          swiper: sl_roadmap3,
        },
});

var swiper =  new Swiper(".collection", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-collection-next",
        prevEl: ".button-collection-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".collection-1", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3, 
    }, 
    freeMode: true, 
    speed: 4000,
    disableOnInteraction: true
});
$(".collection-1,.collection-2,.partner,.partner-2").hover(function() {
        (this).swiper.autoplay.stop();
    }, 
    function() {
        (this).swiper.autoplay.start();
});

var swiper = new Swiper(".collection-2", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3, 
        reverseDirection: true,
    }, 
    freeMode: true, 
    speed: 5000,
    disableOnInteraction: true
});

var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 3
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 5000,
    disableOnInteraction: true
});

var swiper = new Swiper(".swiper-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.5, 
    }, 
    freeMode: true, 
    speed: 4000,
    disableOnInteraction: true
});
var swiper = new Swiper(".swiper-slider-2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.5,
        // reverseDirection: true, 
    }, 
    freeMode: true, 
    speed: 6000,
    disableOnInteraction: true
});
var swiper = new Swiper(".swiper-slider-3", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.5,
    }, 
    freeMode: true, 
    speed: 8000,
    disableOnInteraction: true
});





var swiper =  new Swiper(".product-category", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-product-category-next",
        prevEl: ".button-product-category-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".author", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-author-next",
        prevEl: ".button-author-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".product-category-1", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".product-category2", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".collection-over", {
    loop:true,
    autoplay: {
        waitForTransition: false,
        delay: 0,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 7000,
    navigation: false,
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


var swiper =  new Swiper(".slider-home", {
    loop:true,
    // autoplay: {
    //     waitForTransition: false,
    //     delay: 5000,
    // },
    slidesPerView: 1,
    spaceBetween: 30,

});

var swiper =  new Swiper(".slider-card-product", {
    loop:false,
    slidesPerView: 1,
    navigation: {
        clickable: true,
        nextEl: ".btn-card-product-next",
        prevEl: ".btn-card-product-prev",
    },
});


var swiperthump = new Swiper(".slider-thump", {
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
var swiper2 = new Swiper(".slider-home-3", {
    loop: true,
    effect: 'fade',
    speed:1000,
    slidesPerView: 1,
    spaceBetween:0,
    thumbs: {
        swiper: swiperthump,
    },
    navigation: {
        clickable: true,
        nextEl: ".button-slide-home-3-next",
        prevEl: ".button-slide-home-3-prev",
    },
});

var swiper =  new Swiper(".live-auction", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-live-auction-next",
        prevEl: ".button-live-auction-prev",
    },
    pagination: {
        el: ".swiper-pagination-live-auction",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true
});
$(".mySwiper1").hover(function() {
    (this).swiper1.autoplay.stop();
}, function() {
    (this).swiper1.autoplay.start();
});
var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2200,
    disableOnInteraction: true
});
$(".mySwiper2").hover(function() {
    (this).swiper2.autoplay.stop();
}, function() {
    (this).swiper2.autoplay.start();
});

var swiper_thump = new Swiper(".slideThumbMain", {
    loop: true,
    spaceBetween: 30,
    // observer: false,
    // observeParents: false,
    slidesPerView: 'auto',
    });
    var swiper2 = new Swiper(".slideThumb", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_thump,
    },
    });

    var swiper_card = new Swiper(".slider-card", {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed:1500,
        spaceBetween: 0,
        slidesPerView: 2,
        grabCursor: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
             
      });



    //    js chuyển động phần 

      
var swiper =  new Swiper(".product-category", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-product-category-next",
        prevEl: ".button-product-category-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".author", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-author-next",
        prevEl: ".button-author-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".product-category-1", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".product-category2", {
    loop:false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper =  new Swiper(".collection-over", {
    loop:true,
    autoplay: {
        waitForTransition: false,
        delay: 0,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 7000,
    navigation: false,
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


var swiper =  new Swiper(".slider-home", {
    loop:true,
    // autoplay: {
    //     waitForTransition: false,
    //     delay: 5000,
    // },
    slidesPerView: 1,
    spaceBetween: 30,

});

var swiper =  new Swiper(".slider-card-product", {
    loop:false,
    slidesPerView: 1,
    navigation: {
        clickable: true,
        nextEl: ".btn-card-product-next",
        prevEl: ".btn-card-product-prev",
    },
});



var swiperthump = new Swiper(".slider-thump", {
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
var swiper2 = new Swiper(".slider-home-3", {
    loop: true,
    effect: 'fade',
    speed:1000,
    slidesPerView: 1,
    spaceBetween:0,
    thumbs: {
        swiper: swiperthump,
    },
    navigation: {
        clickable: true,
        nextEl: ".button-slide-home-3-next",
        prevEl: ".button-slide-home-3-prev",
    },
});

var swiper =  new Swiper(".live-auction", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-live-auction-next",
        prevEl: ".button-live-auction-prev",
    },
    pagination: {
        el: ".swiper-pagination-live-auction",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2000,
    disableOnInteraction: true
});
$(".mySwiper1").hover(function() {
    (this).swiper1.autoplay.stop();
}, function() {
    (this).swiper1.autoplay.start();
});
var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto'
        },
        991: {
            slidesPerView: 4
        },
    },
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
    delay: 1, 
    }, 
    freeMode: true, 
    speed: 2200,
    disableOnInteraction: true
});
$(".mySwiper2").hover(function() {
    (this).swiper2.autoplay.stop();
}, function() {
    (this).swiper2.autoplay.start();
});

var swiper_thump = new Swiper(".slideThumbMain", {
    loop: true,
    spaceBetween: 30,
    // observer: false,
    // observeParents: false,
    slidesPerView: 'auto',
    });
    var swiper2 = new Swiper(".slideThumb", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_thump,
    },
    });

    var swiper_card = new Swiper(".slider-card", {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed:1500,
        spaceBetween: 0,
        slidesPerView: 2,
        grabCursor: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
             
      });



      