
; (function ($) {
    "use strict";

    var themesflatTheme = {

        // Main init function
        init: function () {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function () {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function () {
            var self = this;

            // Run on document ready
            self.config.$document.on('ready', function () {


                // Retina Logos
                self.retinaLogo();


            });

            // Run on Window Load
            self.config.$window.on('load', function () {

            });
        },


        // Retina Logos
        retinaLogo: function () {
            var retina = window.devicePixelRatio > 1 ? true : false;
            var $logo = $('#site-logo img');
            var $logo2 = $('#logo-footer img');
            var $logo_retina = $logo.data('retina');

            if (retina && $logo_retina) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
            if (retina && $logo_retina) {
                $logo2.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
            },
    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();
    $(".btn-close").click(function(){
        $("#popup_bid").modal('hide');
    });
    var ajaxContactForm = function () {
        $('#contactform,#commentform').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit,comment-form').append(loading);
                        },
                        success: function (msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    // Dark Light Mode
    if($('.body').hasClass('is_dark')) {
        if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo_dark.png";}
        if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/sun.png";}  
        if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1.svg";}
        if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2.svg";}
        if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3.svg";}
        if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4.svg";}
        if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5.svg";}
        if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6.svg";}
        if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7.svg";}
        if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8.svg";}

    } else  if($('.body').hasClass('is_light')) {
        if ($('#logo_header').length) {document.getElementById("logo_header").src = "assets/images/logo/logo.png";}
        if ($('#img-mode').length) {document.getElementById("img-mode").src = "assets/images/icon/moon.png";} 
        if ($('#work-1').length) {document.getElementById("work-1").src = "assets/images/svg/work-1-light.svg";}
        if ($('#work-2').length) {document.getElementById("work-2").src = "assets/images/svg/work-2-light.svg";}
        if ($('#work-3').length) {document.getElementById("work-3").src = "assets/images/svg/work-3-light.svg";}
        if ($('#work-4').length) {document.getElementById("work-4").src = "assets/images/svg/work-4-light.svg";}
        if ($('#work-5').length) {document.getElementById("work-5").src = "assets/images/svg/work-5-light.svg";}
        if ($('#work-6').length) {document.getElementById("work-6").src = "assets/images/svg/work-6-light.svg";}
        if ($('#work-7').length) {document.getElementById("work-7").src = "assets/images/svg/work-7-light.svg";}
        if ($('#work-8').length) {document.getElementById("work-8").src = "assets/images/svg/work-8-light.svg";}
    }
})(jQuery);

	/*-------------------------------------------------------------------------------
	Tạo nút like
	-------------------------------------------------------------------------------*/

// Lấy tất cả các nút thả tim
var heartButtons = document.querySelectorAll(".heart-button");

// Áp dụng sự kiện click cho tất cả các nút thả tim
heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Thêm hoặc xóa lớp "clicked" khi được click
        this.classList.toggle("clicked");
    });
});

const text = "THANKS FOR WATCHING";
const container = document.getElementById("animatedText");

if (container) {
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.classList.add("char");

    if (index < 10) {
      span.classList.add("thanks");
    } else {
      span.classList.add("watching");
    }

    if (char.toUpperCase() === "O") span.classList.add("o");
    if (char.toUpperCase() === "I") span.classList.add("i");

    span.style.animationDelay = `${index * 0.05}s`;
    span.textContent = char === " " ? "\u00A0" : char;

    container.appendChild(span);
  });
}


// =============================
// KHỞI TẠO TOÀN BỘ SAU KHI DOM SẴN SÀNG
// =============================
$(document).ready(function () {
    // Khởi chạy các chức năng cơ bản
    if (typeof headerFixed === "function") headerFixed();
    if (typeof mobileNav === "function") mobileNav();
    if (typeof ajaxSubscribe === "object" && ajaxSubscribe.eventLoad) ajaxSubscribe.eventLoad();
    if (typeof ajaxContactForm === "function") ajaxContactForm();
    if (typeof alertBox === "function") alertBox();
    if (typeof avatar_popup === "function") avatar_popup();

    // Gọi gotoTop nếu có
    if (typeof gotoTop === "function") gotoTop();
});


// =============================
// KHỞI TẠO SAU KHI LOAD TOÀN BỘ TRANG (bao gồm hình ảnh)
// =============================
$(window).on("load", function () {
    // Khởi tạo Isotope nếu tồn tại
    var $isoGrid = $(".js-iso-blog");
    if ($isoGrid.length && typeof $.fn.isotope === "function") {
        $isoGrid.imagesLoaded(function () {
            $isoGrid.isotope({
                itemSelector: ".portfolio-item", // đảm bảo item trong grid có class này
                layoutMode: "fitRows"
            });
        });

        // Gắn filter click nếu có filter-blog
        $(".filter-blog li").on("click", function () {
            var filterValue = $(this).attr("data-filter");
            $isoGrid.isotope({ filter: filterValue });

            $(".filter-blog li").removeClass("active");
            $(this).addClass("active");
        });
    }
});
