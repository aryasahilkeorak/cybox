
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar-fixed").css("background", "#141A31");
            $(".navbar-fixed").css("transition", "all 0.5s ease");
        }

        else {
            $(".navbar-fixed").css("background", "transparent");

        }
    })
})

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar-fixed-2").css("background", "#141A31");
            $(".navbar-fixed-2").css("transition", "all 0.5s ease");
        }

        else {
            $(".navbar-fixed-2").css("background", "transparent");

        }
    })
})


