(function($) {
  'use strict';

  /*==============================================================================
    Clients Carousel (1)
  ==============================================================================*/
$(".clients-carousel").owlCarousel({
  itemsCustom: [
    [0, 1],
    [768, 1],
    [992, 2]
  ],
  items: 2,
  autoPlay: 7000,
  navigation: false,
  slideSpeed: 200,
  addClassActive: true
});


  /*==============================================================================
    Video Pop-up (Magnific Popup)
  ==============================================================================*/
  $('.js-play').magnificPopup({
    type: 'iframe',
    removalDelay: 300
  });

  /*==============================================================================
    Kỹ năng phần mềm - Counter khi cuộn đến
  ==============================================================================*/
  var elements = document.querySelectorAll('.skill');
  var values = [];
  elements.forEach(function(element) {
    values.push(parseInt(element.innerHTML));
    element.innerHTML = '0%';
  });

  function animateNumber(element, finalNumber) {
    var counter = 0;
    var interval = setInterval(function() {
      if (counter < finalNumber) {
        element.innerHTML = counter + "%";
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function checkKeyPoint() {
    var keyPoint = document.querySelector('#my-key-point-2');
    if (!keyPoint) return;

    var rect = keyPoint.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      window.removeEventListener('scroll', checkKeyPoint);
      startCounting();
    }
  }

  function startCounting() {
    elements.forEach(function(element, index) {
      animateNumber(element, values[index]);
    });
  }

  window.addEventListener('scroll', checkKeyPoint);

  /*==============================================================================
    Clients Carousel (2)
  ==============================================================================*/
  $(".clients-carousel-2").owlCarousel({
    items: 3,
    navigation: false,
    transitionStyle: "backSlide",
    slideSpeed: 200,
    responsiveRefreshRate: 0,
    addClassActive: true,
    autoPlay: 7000,
    autoPlayHoverPause: true,
  });

  /*==============================================================================
    Intersection Observer - Theo dõi masthead
  ==============================================================================*/
  var masthead = document.getElementById('masthead');
  if (masthead) {
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        observer.disconnect();
      }
    });
    observer.observe(masthead);
  }

  /*==============================================================================
    Detect Mobile Devices
  ==============================================================================*/
  var mobileDevice = false;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('mobile');
    mobileDevice = true;
  } else {
    $('html').addClass('no-mobile');
  }

  /*==============================================================================
    Window Load Event
  ==============================================================================*/
  $(window).on('load', function() {
    $('body').addClass('loaded');
    $('.loader').fadeOut(400);

    var wow = new WOW({
      offset: 200,
      mobile: false
    });
    wow.init();
  });

  /*==============================================================================
    Scroll to Anchor
  ==============================================================================*/
  var affixPanelHeight = $('.affix').outerHeight();
  $('.js-target-scroll').on('click', function() {
    var target = $(this.hash);
    if (target.length) {
      $('html,body').animate({
        scrollTop: (target.offset().top - affixPanelHeight + 1)
      }, 1000);
      return false;
    }
  });

  /*==============================================================================
    Navbar Affix Handling
  ==============================================================================*/
  var navbar = $('.navbar-primary');
  var navbar2 = $('.navbar-2');
  var topPanelHeight = $('.top-panel').outerHeight();

  navbar.affix({ offset: { top: topPanelHeight } });
  navbar2.affix({ offset: { top: 10 } });

  navbar2.on('affix.bs.affix', function() {
    if (!navbar2.hasClass('affix')) {
      navbar2.addClass('animated fadeInDown');
    }
  });

  navbar2.on('affix-top.bs.affix', function() {
    navbar2.removeClass('animated fadeInDown');
    $('.navbar-collapse').collapse('hide');
  });

  if (navbar2.hasClass('affix')) {
    navbar2.find('.js-brand-hinge').addClass('animated hinge');
  }

  /*==============================================================================
    Navbar Collapse Behavior
  ==============================================================================*/
  $('.navbar-collapse').on('show.bs.collapse', function() {
    navbar2.addClass('affix');
  });

  $('.navbar-collapse').on('hide.bs.collapse', function() {
    if (navbar2.hasClass('affix-top')) {
      navbar2.removeClass('affix');
    }
  });

  $(".navbar-nav > li > a").on('click', function() {
    $(".navbar-collapse").collapse('hide');
  });

  /*==============================================================================
    ScrollSpy
  ==============================================================================*/
  $('body').scrollspy({
    offset: affixPanelHeight + 1
  });

  /*==============================================================================
    Parallax Effect
  ==============================================================================*/
  if (!mobileDevice) {
    $(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });
  }

  /*==============================================================================
    Pie Chart Activation on Scroll
  ==============================================================================*/
  $(window).scroll(function() {
    $('.chart').each(function() {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $('.chart').easyPieChart({
          scaleColor: false,
          trackColor: '#d2d2d2',
          barColor: function(percent) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, "#0fa64b");
            gradient.addColorStop(1, "#094c26");
            return gradient;
          },
          lineWidth: 7,
          lineCap: 'butt',
          size: 150,
          animate: 3000
        });
      }
    });
  });

  /*==============================================================================
    Progress Bar for Popular Causes
  ==============================================================================*/
  if ($(".count-bar").length) {
    $(".count-bar").appear(function() {
      var el = $(this);
      var percent = el.data("percent");
      $(el).css("width", percent).addClass("counted");
    }, { accY: -10 });
  }

  /*==============================================================================
    Custom Cursor
  ==============================================================================*/
  var originalCursor = document.body.style.cursor;
  document.addEventListener('mousedown', function() {
    document.body.style.cursor = "url('cursor.svg'), auto";
  });
  document.addEventListener('mouseup', function() {
    document.body.style.cursor = originalCursor;
  });

  /*==============================================================================
    Post Gallery
  ==============================================================================*/
  $(".js-post-gallery").owlCarousel({
    singleItem: true,
    transitionStyle: "fadeUp",
    responsiveRefreshRate: 0,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ]
  });

  /*==============================================================================
    Portfolio Masonry + Filter
  ==============================================================================*/
  $('.js-iso').each(function() {
    var $container = $(this);
    $container.imagesLoaded(function() {
      $container.isotope({
        itemSelector: '.js-iso-item',
        percentPosition: true,
        layoutMode: 'masonry',
        masonry: { columnWidth: '.grid-sizer' }
      });
    });
  });

  $('.filter li').on('click', function() {
    $('.filter .active').removeClass('active');
    $(this).closest('li').addClass('active');
    var selector = $(this).attr('data-filter');
    $('.js-iso').isotope({
      filter: selector,
      animationOptions: {
        duration: 500,
        queue: false
      }
    });
    return false;
  });

  /*==============================================================================
    Statistic Counter
  ==============================================================================*/
  var stats = document.querySelectorAll('.statistic-number');
  var statValues = [];
  stats.forEach(function(el) {
    statValues.push(parseInt(el.innerHTML));
    el.innerHTML = '0';
  });

  function startCountingStats() {
    stats.forEach(function(el, idx) {
      animateNumber(el, statValues[idx]);
    });
  }

  /*==============================================================================
    Review Carousel
  ==============================================================================*/
  var reviewCarousel = $(".review-carousel").owlCarousel({
    singleItem: true,
    autoHeight: true,
    addClassActive: true,
    navigation: true,
    responsiveRefreshRate: 0,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    slideSpeed: 400,
    afterMove: function() {
      $('.thumbnail-pagination a').removeClass('active');
      $('.thumbnail-pagination a').eq(this.currentItem).addClass('active');
    }
  });

  if ($(".review-carousel").length) {
    setTimeout(function() {
      reviewCarousel.data('owlCarousel').updateVars();
    }, 100);
  }

  reviewCarousel.trigger('owl.jumpTo', 1);

  $('.thumbnail-pagination a').click(function(e) {
    var index = $(this).index();
    reviewCarousel.trigger('owl.goTo', index);
    e.preventDefault();
  });

  $(".custom-next").click(function() {
    reviewCarousel.trigger('owl.next');
  });

  $(".custom-prev").click(function() {
    reviewCarousel.trigger('owl.prev');
  });

  /*==============================================================================
    Like Button Toggle
  ==============================================================================*/
  var heartButtons = document.querySelectorAll(".heart-button");
  heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      this.classList.toggle("clicked");
    });
  });

  /*==============================================================================
    Gallery Carousel
  ==============================================================================*/
  $(".gallery-carousel").owlCarousel({
    singleItem: true,
    autoHeight: true,
    pagination: false,
    navigation: true,
    transitionStyle: "fadeUp",
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ]
  });

  /*==============================================================================
    Ajax Form
  ==============================================================================*/
  if ($('.js-ajax-form').length) {
    $('.js-ajax-form').each(function() {
      $(this).validate({
        errorClass: 'error wobble-error',
        submitHandler: function(form) {
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(form).serialize(),
            success: function() {
              // xử lý thành công
            },
            error: function() {
              // xử lý lỗi
            }
          });
        }
      });
    });
  }

})(jQuery);

/*==============================================================================
  Copy Link to Clipboard
==============================================================================*/
function copyLink() {
  var link = window.location.href;
  navigator.clipboard.writeText(link);
  alert("Đường dẫn đã được sao chép!");
}
