// Scroll Navbar
$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');

    $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if (st > lastScrollTop) { // scroll down

            // use this is jQuery full is used
            $navbar.fadeOut()

            // use this to use CSS3 animation
            // $navbar.addClass("fade-out");
            // $navbar.removeClass("fade-in");

            // use this if no effect is required
            // $navbar.hide();
        } else { // scroll up

            // use this is jQuery full is used
            $navbar.fadeIn()

            // use this to use CSS3 animation
            // $navbar.addClass("fade-in");
            // $navbar.removeClass("fade-out");

            // use this if no effect is required
            // $navbar.show();
        }
        lastScrollTop = st;
    });
});

// Smooth Slide
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});

// Slider Stop on Mouse Hover
$(".carousel").on("mouseenter",function() {
    $(this).carousel('pause');
}).on("mouseleave", function() {
    $(this).carousel('cycle');
});

// Animation on Scroll;
jQuery(function($) {
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});

// Date Picker
var oldLink = null;
// code to change the active stylesheet
function setActiveStyleSheet(link, title) {
    var i, a, main;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if(a.getAttribute("title") == title) a.disabled = false;
        }
    }
    if (oldLink) oldLink.style.fontWeight = 'normal';
    oldLink = link;
    link.style.fontWeight = 'bold';
    return false;
}
