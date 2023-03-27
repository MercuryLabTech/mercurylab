import $ from "jquery";

export function init() {
    $(document).ready(function() {
        $(".accordion > .accordion__button").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".accordion__content")
                    .slideUp(600);
            } else {
                $(".accordion__content").slideUp(600);
                setTimeout(() => {
                    $(this)
                        .siblings(".accordion__content")
                        .slideDown(500);
                }, document.querySelector('.accordion__button.active') ? 600 : 0);
                $(".accordion > .accordion__button").removeClass("active");
                $(this).addClass("active");
            }
        });
    });
}