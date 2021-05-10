jQuery(document).ready(function ($) {
    // isotope
    let btns = $("#trabalhos .button-group button");

    btns.click(function (e) {
        $("#trabalhos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#trabalhos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function () {
        $("#trabalhos .grid").isotope({
            filter: "*",
        });
    });

    // magnify
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: "ease-in-out", // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By default it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is("img")
                    ? openerElement
                    : openerElement.find("img");
            },
        },
    });
});
