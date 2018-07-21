/* ========================================= 
                WOW Animations
    ========================================= */
$(document).ready(function () {
    new WOW().init();
})

/* ========================================= 
                Products
    ========================================= */
$(function () {

    $('#products').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
})

/* ========================================= 
                Team
    ========================================= */
$(document).ready(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            },
            //breakpoint from 768 up
            768: {
                items: 3
            }

        }
    });

});

/* ========================================= 
                Testimonial
    ========================================= */
$(document).ready(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/* ========================================= 
                Stats
    ========================================= */
$(document).ready(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

})

/* ========================================= 
                NAVIGATION
    ========================================= */
// show/hide transparent black navigation

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("dslr-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("dslr-top-nav");
            $("#back-to-top").fadeIn();
        }
    })

})

//SMOOTH SCROLLING
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work and etc
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//close mobile menu on click 
$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();
    })
})