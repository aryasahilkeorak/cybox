$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1150,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});


