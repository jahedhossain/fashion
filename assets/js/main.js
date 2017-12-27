(function ($) {
    "use strict";

    $(document).ready(function ($) {
        
        /*homepage-slide*/
        $('.homepage-slide').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });
        $(".products-item").masonry();
        
        /*products-blog owlCarousel*/
        $('.products-blog').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false
        });
        
        /*off-cenver-manu*/
        $(".manu-trigger").on("click", function() {
            $(".off-cenver-manu, .off-cenver-overlay").addClass("active");
            return false;
        });
        $(".close-icon, .off-cenver-overlay").on("click", function() {
            $(".off-cenver-manu, .off-cenver-overlay").removeClass("active");
        });

    });


    $(window).load(function () {


    });


}(jQuery));