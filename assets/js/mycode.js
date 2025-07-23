
(function ($) {
  "use strict";
// =============== MODULE: Counter ===============
const Counter = {
  initStatisticNumber() {
    // Chỉ chạy trên trang chủ
    if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/')
    return;

    const elements = document.querySelectorAll('.statistic-number');
    const values = [];
    elements.forEach(el => {
      values.push(parseInt(el.innerHTML));
      el.innerHTML = '0';
    });

    const animate = (el, val) => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < val) {
          el.innerHTML = counter;
          counter++;
        } else clearInterval(interval);
      }, 50);
    };

    const inView = el => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= window.innerHeight;

    const trigger = () => {
      const key = document.querySelector('#my-key-point');
      if (key && inView(key)) {
        window.removeEventListener('scroll', trigger);
        elements.forEach((el, i) => animate(el, values[i]));
      }
    };

    window.addEventListener('scroll', trigger);
    trigger();
  },

  initStatisticNumber2() {
    // Chỉ chạy trên trang chủ
    if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') return;

    const elements = document.querySelectorAll('.statistic-number-2');
    const values = [];
    elements.forEach(el => {
      values.push(parseInt(el.innerHTML));
      el.innerHTML = '0';
    });

    const animate = (el, val) => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < val) {
          el.innerHTML = counter + ' Năm';
          counter++;
        } else clearInterval(interval);
      }, 900);
    };

    const inView = el => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= window.innerHeight;

    const trigger = () => {
      const key = document.querySelector('#my-key-point');
      if (key && inView(key)) {
        window.removeEventListener('scroll', trigger);
        elements.forEach((el, i) => animate(el, values[i]));
      }
    };

    window.addEventListener('scroll', trigger);
    trigger();
  }
};


// =============== MODULE: Preload Video ===============
 const PreloadVideo = {
  handleClickToSkip() {
    document.addEventListener('click', function skipPreload() {
      const preload = document.getElementById('preload');
      const video = document.getElementById('preloadVideo');

      if (preload && !preload.classList.contains('hidden')) {
        preload.classList.add('hidden');
        if (video && !video.paused) video.pause();

        setTimeout(() => {
          preload.style.display = 'none';
        }, 500);

        document.removeEventListener('click', skipPreload);
      }
    });
  },

  handleEndedAutoHide() {
    const video = document.getElementById('preloadVideo');
    const preload = document.getElementById('preload');
    const main = document.getElementById('mainContent');

    if (!video || !preload) return;

    video.addEventListener('ended', function () {
      video.classList.add('fade-out');
      preload.classList.add('hidden');

      setTimeout(() => {
        preload.style.display = 'none';
        if (main) main.style.display = 'block';
      }, 500);
    });
  }
};


// =============== MODULE: Video Popup ===============
const VideoPopup = {
  bindPopup() {
    const btn = document.querySelector(".video-btn");
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("hostVideo");

    if (!btn || !popup || !video) return;

    btn.addEventListener("click", e => {
      e.preventDefault();
      // Đặt đường dẫn tới file của bạn (ví dụ /videos/myvideo.mp4)
      video.querySelector('source').src = "assets/video-intro/intro-home.mp4";
      video.load();            // nạp video mới
      video.play().catch(()=>{}); // tự động play (có thể bị chặn bởi browser nếu chưa tương tác)
      popup.style.display = "flex";
    });

    // Đóng popup khi bấm nút × hoặc click ngoài vùng video
    popup.addEventListener("click", e => {
      if (e.target === popup) VideoPopup.closePopup();
    });
  },

  closePopup() {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("hostVideo");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (popup) popup.style.display = "none";
  }
};

window.VideoPopup = VideoPopup;
window.addEventListener("DOMContentLoaded", () => VideoPopup.bindPopup());


  // =============== MODULE: Isotope Layout ===============
const IsotopeGrid = {
  init() {
    $('.js-iso').each(function () {
      const $container = $(this);
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '.js-iso-item',
          percentPosition: true,
          layoutMode: 'masonry',
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });
      });
    });
  },

  bindFilterButtons() {
    $('.filter li').on('click', function () {
      $('.filter .active').removeClass('active');
      $(this).closest('li').addClass('active');
      const selector = $(this).attr('data-filter');
      $('.js-iso').isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          queue: false
        }
      });
      return false;
    });
  }
};
  // =============== MODULE: Skill Counter ===============
const SkillCounter = {
  init() {
    if (!window.location.pathname.endsWith('Introduce.html') && window.location.pathname !== '/') return;

    const elements = document.querySelectorAll('.skill');
    const keyPoint = document.querySelector('#my-key-point-2');

    if (!elements.length || !keyPoint) return;

    const values = [];
    elements.forEach(el => {
      values.push(parseInt(el.innerHTML));
      el.innerHTML = '0%';
    });

    const animate = (el, val) => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < val) {
          el.innerHTML = counter + "%";
          counter++;
        } else clearInterval(interval);
      }, 9);
    };

    const trigger = () => {
      const rect = keyPoint.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        window.removeEventListener('scroll', trigger);
        elements.forEach((el, i) => animate(el, values[i]));
      }
    };

    window.addEventListener('scroll', trigger);
    trigger();
  }
};
// =============== MODULE: Isotope Blog Layout (for Portfolio page) ===============
const IsotopePortfolio = {
  init() {
    const $grid = $('.js-iso-blog');
    if (!$grid.length) return;

    $grid.isotope({
      itemSelector: '.js-iso-blog-details',
      layoutMode: 'fitRows',
      percentPosition: true
    });

    $('.filter-blog li').on('click', function () {
      $('.filter-blog li').removeClass('active');
      $(this).addClass('active');
      const filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      return false;
    });
  }
};


//=============== Phần điều chỉnh hiệu ứng con trỏ chuột ===============
const cursor = function () {
	// Nếu là thiết bị cảm ứng (mobile/tablet), không chạy hiệu ứng
	if ('ontouchstart' in window || window.innerWidth < 992) {
		document.querySelector(".tf-mouse")?.remove(); // ẩn hoàn toàn phần tử nếu muốn
		return;
	}

	var myCursor = jQuery(".tf-mouse");
	if (myCursor.length) {
	  if ($("body")) {
		const e = document.querySelector(".tf-mouse-inner"),
		  t = document.querySelector(".tf-mouse-outer");
		let n,
		  i = 0,
		  o = !1;

		window.onmousemove = function (s) {
		  if (!o)
			t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
		  e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
		  n = s.clientY;
		  i = s.clientX;
		};

		$("body").on(
			"mouseenter",
			"a, .canvas, .progress-wrap, .wishlist-button",
			function () {
				e.classList.add("mouse-hover");
				t.classList.add("mouse-hover");
			}
		);
		$("body").on(
			"mouseleave",
			"a, .canvas, .progress-wrap, .wishlist-button",
			function () {
				if (!($(this).is("a") && $(this).closest(".canvas").length)) {
					e.classList.remove("mouse-hover");
					t.classList.remove("mouse-hover");
				}
			}
		);

		e.style.visibility = "visible";
		t.style.visibility = "visible";
	  }
	}
};


  // =============== Khởi chạy các module ===============
window.addEventListener('DOMContentLoaded', function () {
  Counter.initStatisticNumber();
  Counter.initStatisticNumber2();
  PreloadVideo.handleClickToSkip();
  PreloadVideo.handleEndedAutoHide();
  VideoPopup.bindPopup();
  SkillCounter.init();
  IsotopeGrid.init();
  IsotopeGrid.bindFilterButtons();
  if (typeof IsotopeBlog !== 'undefined') {
    IsotopeBlog.init();
    IsotopeBlog.bindFilterButtons();
  }
  IsotopePortfolio.init();
  cursor();
});



})(jQuery);
